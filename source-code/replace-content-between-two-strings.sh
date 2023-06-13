
reset

clear

## find live-content/ -iname '*.html' -execdir python3 {} replace-content-between-two-strings.py  \;

## 

python3 replace-content-between-two-strings.py replace-content-between-two-strings.py live-content/index.html

python3 replace-content-between-two-strings.py replace-content-between-two-strings.py live-content/tool-clean-and-format-markdown.html

python3 replace-content-between-two-strings.py replace-content-between-two-strings.py live-content/tool-convert-markdown-proprietary-format.html

python3 replace-content-between-two-strings.py replace-content-between-two-strings.py live-content/tool-system-monitoring.html

python3 replace-content-between-two-strings.py replace-content-between-two-strings.py live-content/tool-calculate-text-difference-percentage.html