#!/bin/bash

# Latency monitoring script voor de Praktijk basSIS website
#
# Dit script test de latency van de website en geeft gedetailleerde informatie
# over de verschillende fases van de request.

WEBSITE_URL="https://voskesss.github.io/praktijkbasis/"

# Kleuren voor output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# Parse arguments
ITERATIONS=1
while [[ $# -gt 0 ]]; do
  case $1 in
    -n|--number)
      ITERATIONS="$2"
      shift 2
      ;;
    -h|--help)
      echo "Usage: $0 [-n NUMBER] [-h]"
      echo "  -n, --number NUMBER    Aantal keer om de test uit te voeren (standaard: 1)"
      echo "  -h, --help            Toon deze help"
      exit 0
      ;;
    *)
      shift
      ;;
  esac
done

echo -e "${BOLD}${CYAN}=== Website Latency Monitor ===${NC}\n"
echo -e "Website: ${WEBSITE_URL}\n"

# Arrays voor het opslaan van resultaten
declare -a ttfb_times
declare -a total_times
declare -a http_codes

for ((i=1; i<=ITERATIONS; i++)); do
  if [ $ITERATIONS -gt 1 ]; then
    echo -e "${CYAN}Test $i/$ITERATIONS${NC}"
  fi

  # Voer curl uit en sla timing informatie op
  result=$(curl -o /dev/null -s -w "%{http_code}|%{time_namelookup}|%{time_connect}|%{time_appconnect}|%{time_starttransfer}|%{time_total}|%{size_download}" "$WEBSITE_URL" 2>&1)

  # Check of curl succesvol was
  if [ $? -ne 0 ]; then
    echo -e "${RED}Fout bij het testen van de website${NC}"
    echo "Controleer je internetverbinding en of de URL correct is."
    continue
  fi

  # Parse de resultaten
  IFS='|' read -r http_code dns_time connect_time ssl_time ttfb total_time size <<< "$result"

  http_codes+=($http_code)

  # Converteer naar milliseconden
  dns_ms=$(echo "$dns_time * 1000" | bc | cut -d. -f1)
  connect_ms=$(echo "$connect_time * 1000" | bc | cut -d. -f1)
  ssl_ms=$(echo "$ssl_time * 1000" | bc | cut -d. -f1)
  ttfb_ms=$(echo "$ttfb * 1000" | bc | cut -d. -f1)
  total_ms=$(echo "$total_time * 1000" | bc | cut -d. -f1)

  ttfb_times+=($ttfb_ms)
  total_times+=($total_ms)

  # Bepaal kleur op basis van tijd
  if [ $ttfb_ms -lt 100 ]; then
    ttfb_color=$GREEN
  elif [ $ttfb_ms -lt 300 ]; then
    ttfb_color=$YELLOW
  else
    ttfb_color=$RED
  fi

  if [ $total_ms -lt 100 ]; then
    total_color=$GREEN
  elif [ $total_ms -lt 300 ]; then
    total_color=$YELLOW
  else
    total_color=$RED
  fi

  # Toon resultaten
  echo -e "${BOLD}HTTP Status:${NC} $http_code"
  echo -e "${BOLD}DNS Lookup:${NC} ${dns_ms}ms"
  echo -e "${BOLD}TCP Connect:${NC} ${connect_ms}ms"
  echo -e "${BOLD}TLS Handshake:${NC} ${ssl_ms}ms"
  echo -e "${BOLD}Time to First Byte:${NC} ${ttfb_color}${ttfb_ms}ms${NC}"
  echo -e "${BOLD}Total Time:${NC} ${total_color}${total_ms}ms${NC}"

  # Converteer size naar KB
  size_kb=$(echo "scale=2; $size / 1024" | bc)
  echo -e "${BOLD}Downloaded:${NC} ${size_kb} KB"

  # Waarschuwingen en berichten
  if [ "$http_code" = "403" ]; then
    echo -e "\n${RED}${BOLD}⚠️  Waarschuwing: De website geeft een 403 Forbidden fout${NC}"
    echo -e "${YELLOW}Dit kan betekenen dat GitHub Pages nog niet correct is geconfigureerd.${NC}"
    echo -e "${YELLOW}Controleer de repository instellingen > Pages om te zien of Pages is ingeschakeld.${NC}"
  elif [ "$http_code" = "200" ]; then
    echo -e "\n${GREEN}✓ Website is bereikbaar!${NC}"
  elif [ "$http_code" = "404" ]; then
    echo -e "\n${RED}⚠️  404 Not Found - De pagina bestaat niet${NC}"
  fi

  if [ $i -lt $ITERATIONS ]; then
    echo -e "\n$(printf '─%.0s' {1..50})\n"
    sleep 1
  fi
done

# Bereken en toon gemiddelden als er meerdere iteraties zijn
if [ $ITERATIONS -gt 1 ] && [ ${#ttfb_times[@]} -gt 0 ]; then
  ttfb_sum=0
  total_sum=0

  for ttfb in "${ttfb_times[@]}"; do
    ttfb_sum=$((ttfb_sum + ttfb))
  done

  for total in "${total_times[@]}"; do
    total_sum=$((total_sum + total))
  done

  avg_ttfb=$((ttfb_sum / ${#ttfb_times[@]}))
  avg_total=$((total_sum / ${#total_times[@]}))

  echo -e "\n${BOLD}${CYAN}=== Gemiddelden over ${#ttfb_times[@]} tests ===${NC}"
  echo -e "${BOLD}Gemiddelde TTFB:${NC} ${avg_ttfb}ms"
  echo -e "${BOLD}Gemiddelde Total Time:${NC} ${avg_total}ms"
fi

echo ""
