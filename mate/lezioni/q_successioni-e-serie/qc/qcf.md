# Successione divergente

Diremo che la successione

$a_1, a_2, a_3, \dots, a_n, \dots$

è **divergente** se ammette limite infinito.

> **Nota:** Le espressioni "successione a limite infinito" e "successione divergente" sono equivalenti: ma è più semplice dire "divergente" piuttosto che "tende ad infinito", quindi d'ora in avanti useremo tale termine.

cioè se preso un numero positivo $M$ grande a piacere, esiste in sua corrispondenza un numero $k_M \in \mathbb{N}$ dipendente da $M$ tale che quando il valore (in modulo) dei termini della successione supera il valore $M$, allora ogni $n$ è superiore a $k_M$.

In simboli:

$$
\lim_{n \to \infty} a_n = \infty \iff |a_n| > M \implies n > k_M
$$

***

Se la successione

$a_1, a_2, a_3, \dots, a_n, \dots$

è divergente, allora la successione inversa

$\frac{1}{a_1}, \frac{1}{a_2}, \frac{1}{a_3}, \frac{1}{a_4}, \dots, \frac{1}{a_n}, \dots$

è infinitesima.

> vale anche il viceversa: se la successione
> $a_1, a_2, a_3, \dots, a_n, \dots$
> è infinitesima allora la successione inversa
> $\frac{1}{a_1}, \frac{1}{a_2}, \frac{1}{a_3}, \frac{1}{a_4}, \dots, \frac{1}{a_n}, \dots$
> è divergente.

***

Verifichiamo che le successioni già considerate nella [pagina qui linkata](qcccb.html) sono divergenti:

***

### Esempio 1 (successione crescente a limite più infinito)

Verifichiamo che la successione

$\frac{1}{4}, \frac{1}{2}, 1, 2, 4, 8, 16, 32, 64, \dots, 2^{n-3}, \dots$

diverge a $+\infty$.

Utilizzo la definizione di limite:
Se considero un numero positivo molto grande $M$, devo mostrare che esiste un legame fra $M$ e l'indice $n$ tale che più aumenta $M$ più aumenta $n$.

Da un certo momento in poi, se $n$ è grande, vale:

$|2^{n-3}| > M$

Il primo termine è una potenza a base positiva e quindi è certamente positivo; allora posso togliere il modulo:

$2^{n-3} > M$

per ricavare l'esponente passo ai logaritmi a base $2$: essendo entrambe le funzioni monotone crescenti la disuguaglianza si conserva:

$\log_2 2^{n-3} > \log_2 M$

Logaritmo e potenza si elidono:

$n-3 > \log_2 M$

porto $-3$ dall'altra parte ed ottengo:

$n > 3 + \log_2 M$

questa espressione è equivalente alla prima.
Essendo $M$ molto grande segue che anche $3 + \log_2 M$ è molto grande ed essendo $n > 3 + \log_2 M$, più aumenta $M$ più deve aumentare il valore di $n$.
come volevamo.

***

### Esempio 2 (successione decrescente a limite meno infinito)

Verifichiamo che la successione

$-1, -2, -3, \dots, -n, \dots$

diverge a $-\infty$.

> è un esempio banale, facciamolo per vedere come comportarci, in generale, con il modulo.

Utilizzo la definizione di limite:
Se considero un numero molto grande $M$, devo mostrare che esiste un legame fra $M$ e l'indice $n$ tale che più aumenta $M$ più aumenta $n$.

Da un certo momento in poi, se $n$ è grande, vale:

$|a_n| > M \text{ cioè } |-n| > M$

Avendo un [modulo posso scomporre la disequazione](qcfa.html) nell'insieme di disequazioni:

$-n > M \quad \text{e} \quad -n < -M$

Essendo $M$ positivo la prima disequazione non ha soluzioni.
La seconda (moltiplicando per $-1$, numero negativo, la disequazione cambia di verso) mi dà:

$n > M$

quindi:
Essendo $M$ molto grande segue che anche $n$ è molto grande e più aumenta $M$ più deve aumentare il valore di $n$.
come volevamo.

***

### Esempio 3 (successione oscillante a limite infinito)

Verifichiamo che la successione

$-1, +2, -3, +4, -5, +6, -7, +8, \dots, n \cdot (-1)^n, \dots$

diverge ad $\infty$.

Utilizzo la definizione di limite:
Se considero un numero positivo molto grande $M$, devo mostrare che esiste un legame fra $M$ e l'indice $n$ tale che più aumenta $M$ più aumenta $n$.

Da un certo momento in poi, se $n$ è grande, vale:

$|n \cdot (-1)^n| > M$

Avendo un [modulo posso scomporre la disequazione](qcfa.html) nell'insieme di disequazioni:

$n \cdot (-1)^n > M \quad \text{e} \quad n \cdot (-1)^n < -M$

- Considero la prima disequazione:
  $n \cdot (-1)^n > M$
  Essa è valida solamente quando $n$ è un numero pari, essendo $(-1)^n = +1$, ed in tal caso posso sostituirla con:
  $n > M$

- Considero la seconda disequazione:
  $n \cdot (-1)^n < -M$
  Essa è valida solamente quando $n$ è un numero dispari, essendo $(-1)^n = -1$, ed in tal caso posso sostituirla con:
  $-n < -M$

Considerando i risultati di entrambe le disequazioni ottengo un intorno completo di $\infty$.

Quando $M$ è molto grande segue che sia $n$ che $-n$ sono molto grandi e più aumenta $M$ più deve aumentare il valore assoluto di $n$, cioè $n$ aumenta e $-n$ diminuisce fornendo valori di $a_n$ in un intorno completo di $\infty$.
come volevamo.

[Per avere una rappresentazione grafica guarda la terza e quarta figura di questa pagina sostituendo al valore $6$ il termine $M$](qcccba.html)