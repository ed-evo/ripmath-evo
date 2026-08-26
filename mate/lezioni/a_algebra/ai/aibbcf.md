# Teorema di Rouchè-Capelli

Siamo ora in grado di enunciare un teorema che rappresenta il sunto di tutti i ragionamenti precedenti:

**Un sistema di equazioni di primo grado (lineari) ammette soluzioni (una o infinite) se e solo se il rango (caratteristica) della matrice completa è uguale al rango (caratteristica) della matrice incompleta**

Inoltre, sempre rifacendoci ai ragionamenti precedenti, possiamo dire che, se i ranghi uguali della matrice completa ed incompleta sono inferiori al numero delle incognite allora il sistema ammette infinite soluzioni.

Non solo, ma possiamo affermare che, se le incognite sono $3$ e il rango vale $s$ (con $s < 3$) allora le soluzioni sono $\infty^{3-s}$.

> Il ragionamento fatto per i sistemi di $3$ equazioni di primo grado in tre incognite potrà essere esteso in modo semplice ai sistemi di $n$ equazioni in $n$ incognite.

Insomma per risolvere un sistema di $3$ equazioni di primo grado in tre incognite dobbiamo:

1. **Controllare la matrice completa ed incompleta e vedere se il loro rango vale $3$: se vale $3$ allora posso usare Cramer per trovare la soluzione**
2. **Se i ranghi sono diversi il sistema non ammette soluzioni**
3. **Se i ranghi sono uguali ma inferiori a $3$ allora devo scegliere le equazioni corrispondenti al determinante il cui valore sia diverso da zero e considerare solo un numero di incognite uguale al numero di equazioni considerate spostando le altre incognite dopo l'uguale trattandole come fossero parametri e risolvere il sistema che ottengo con il metodo di Cramer (o di sostituzione)**