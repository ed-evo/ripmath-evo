# Polinomi

## Perché I Polinomi

Finora in classe sei partito dai numeri naturali $\textcolor{red}{\mathbb{N} \quad 1, 2, 3, \dots}$ ed hai visto che su di essi si possono fare sempre solamente le operazioni di somma e prodotto, poi per poter fare anche la differenza sei passato ai numeri interi relativi $\textcolor{red}{\mathbb{Z} \quad \dots, -2, -1, 0, +1, +2, \dots}$ e su di essi hai definito le operazioni di somma, differenza e prodotto; infine, per poter fare anche il quoziente sei passato ai numeri razionali $\textcolor{red}{\mathbb{Q}}$.

Ora, secondo te, sono più importanti i numeri o le operazioni? Evidentemente, se ho variato i numeri per poter fare le operazioni, saranno più importanti le operazioni.

Qual è quindi il passo successivo?
Costruire un insieme il più ampio possibile in cui studiare le operazioni: ebbene questo insieme è quello dei polinomi.

Ti avviso subito che studiare i polinomi purtroppo è abbastanza noioso, perché è come se ti mettessi a studiare un vocabolario, però ne vale la pena: una volta che avrai studiato le proprietà di un'operazione queste resteranno sempre uguali per tutti gli enti matematici.

Ti ho detto che l'insieme dei polinomi è l'insieme più ampio su cui fare le operazioni, allora ora ti mostro che anche i numeri sono compresi nei polinomi.

Consideriamo ad esempio il numero:

$$
\textcolor{red}{4657}
$$

esso si può pensare come $4$ migliaia più $6$ centinaia più $5$ decine più $7$ unità, cioè:

$$
\textcolor{red}{4 \cdot 10^3 + 6 \cdot 10^2 + 5 \cdot 10^1 + 7 \cdot 10^0}
$$

se ora al posto di $10$ metto $a$ ottengo un polinomio:

$$
\textcolor{red}{4a^3 + 6a^2 + 5a + 7}
$$

il numero:

$$
\textcolor{red}{4 \cdot 10^3 + 6 \cdot 10^2 + 5 \cdot 10^1 + 7 \cdot 10^0}
$$

si dice scritto in forma polinomiale.

---

> **Esercizio:** ricordando che
>
> $$
> \textcolor{red}{10^{-1} = \frac{1}{10}} \quad \text{e} \quad \textcolor{red}{10^{-2} = \frac{1}{10^2}}
> $$
>
> trasforma prima in forma polinomiale e poi in polinomio (con $a$ al posto di $10$) il numero $103456{,}78$.

## Definizione

Polinomio deriva anche lui dal greco e significa più termini.

<details>
<summary>Cos'è un termine</summary>

Per termine si intende ciò che c'è fra un segno PIÙ o MENO e il segno PIÙ o MENO successivo (se c'è) (fanno eccezione le parentesi), così ad esempio se prendiamo:

$$
\textcolor{red}{2a + 3ab - 4a}
$$

Il monomio $\textcolor{red}{+3ab}$ è un termine essendo compreso fra il suo $+$ ed il $-$ successivo.

Il monomio $\textcolor{red}{-4a}$ è un termine essendo l'ultimo della fila.

Il monomio $\textcolor{red}{2a}$ è un termine.

> **Nota:** Ricorda che se un monomio non ha segno davanti è sottointeso il segno $+$.

Se ora prendiamo:

$$
\textcolor{red}{2a + (-3ab)(-4a)/(-3bc) - 4a}
$$

tutto il blocco $\textcolor{red}{+(-3ab)(-4a)/(-3bc)}$ è un solo termine.
</details>

Quindi un polinomio è un insieme di più monomi.

I polinomi vengono classificati per il numero di termini irriducibili [ (cioè che non si possono più sommare)]{.text-pink}.

[$2a^5+3b$]{.text-red} è un binomio.

[$a+1$]{.text-red} è un binomio.

[$2a^5+3b+2c$]{.text-red} è un trinomio.

[$2a+3b+4a$]{.text-red} è un binomio perché [$2a+4a=6a$]{.text-red} e i termini diventano $2$.

[$2a^2+3b+4a+1$]{.text-red} è un quadrinomio.

Oltre $4$ termini piuttosto che parlare di quinquinomio, esanomio, ... si preferisce dire polinomio di $5$ termini, di $6$ termini, ...

## Grado Di Un Polinomio

Consideriamo ad esempio il polinomio

$$
\textcolor{red}{2a^4 + 3a^6b - 4a + 5}
$$

$\textcolor{red}{2a^4}$ ha grado $4$
$\textcolor{red}{+3a^6b}$ ha grado $7$
$\textcolor{red}{-4a}$ ha grado $1$
$\textcolor{red}{5}$ ha grado $0$

Il polinomio in totale ha grado $7$: infatti prendiamo il grado dei monomi e scegliamo quello più alto.

> **DEFINIZIONE:** [il grado di un polinomio è uguale al grado del suo monomio di grado più alto]{.text-purple}

esempio:

Qual è il grado di $\textcolor{red}{a^3 + 3a^2b^2 - 4b^2}$?

* Il grado in generale è $4$
* rispetto alla lettera $a$ è $3$
* rispetto alla lettera $b$ è $2$
* rispetto alla lettera $c$ è $0$ (la lettera $c$ non c'è)

## Polinomio Ordinato

Considera i $2$ polinomi:

1) $\textcolor{red}{a^3+b^3+c+ab}$
2) $\textcolor{red}{4a^3+6a^2+4a+5}$

Osserva i gradi dei monomi rispetto alla lettera $\textcolor{red}{a}$:
- Nel primo polinomio sono $\textcolor{red}{3}$, $\textcolor{red}{0}$, $\textcolor{red}{0}$, $\textcolor{red}{1}$
- Nel secondo polinomio sono $\textcolor{red}{3}$, $\textcolor{red}{2}$, $\textcolor{red}{1}$, $\textcolor{red}{0}$

Il secondo polinomio dove i gradi sono in fila viene detto [polinomio ordinato secondo la lettera a]{.text-purple}.

---

### Esempi

$$
\textcolor{red}{a^3+a^2+ab+b}
$$

Il polinomio è ordinato secondo le potenze decrescenti della lettera $a$.

$$
\textcolor{red}{a^3+2a^2b+5ab^2+6b^3}
$$

Il polinomio è ordinato secondo le potenze decrescenti della lettera $a$ e secondo le potenze crescenti della lettera $b$.

$$
\textcolor{red}{a+ab+5b^2+b^3-5b^4}
$$

Il polinomio è ordinato secondo le potenze crescenti della lettera $b$.

---

> **Attenzione:** talvolta un polinomio può essere ordinato senza sembrarlo; esempio:
>
> $$
> \textcolor{red}{a^3+a+1}
> $$
>
> Non sembra ordinato ma se lo scrivo:
>
> $$
> \textcolor{red}{a^3+0a^2+a+1}
> $$
>
> (tanto lo $0$ non cambia niente) allora è ordinato.
>
> Anche il polinomio:
>
> $$
> \textcolor{red}{1+a+ab^2+a^3+a^3bc}
> $$
>
> non sembra ordinato, ma se lo scrivo:
>
> $$
> \textcolor{red}{1a^0+a(1+b^2)+0a^2+a^3(1+bc)}
> $$
>
> allora diventa ordinato secondo le potenze crescenti della lettera $a$.
>
> Per esercizio prova ad ordinarlo secondo le potenze crescenti della lettera $b$.
> Ordinalo infine rispetto alla lettera $c$.

## Polinomio Completo

Il polinomio $\textcolor{red}{a^3+a+1}$ non sembra ordinato ma se lo scrivo:

$$
\textcolor{red}{a^3+0a^2+a+1}
$$

allora si vede che è ordinato.

Un polinomio che è ordinato e in cui vi siano tutti i termini (con coefficiente non nullo) tra il grado maggiore e $0$ è completo.

> [(intuitivamente se è ordinato da solo senza aggiungere niente)]{.text-purple}

Esempi:

$\textcolor{red}{5a^3-7a^2+4a+1}$ è completo.

$\textcolor{red}{5a^3-7a^2+4a}$ non è completo (manca il termine a grado $0$).

Per esercizio scrivi un polinomio di almeno $6$ termini che sia completo ed uno di $7$ che non sia completo.

## Numeri in forma polinomiale

Anche i numeri sono compresi nei polinomi:
consideriamo ad esempio il numero $\textcolor{red}{4657}$, esso si può pensare come $4$ migliaia più $6$ centinaia più $5$ decine più sette unità cioè:

$$
\textcolor{red}{4 \times 10^3 + 6 \times 10^2 + 5 \times 10^1 + 7 \times 10^0}
$$

se ora al posto di $10$ metto $a$ ottengo un polinomio:

$$
\textcolor{red}{4a^3 + 6a^2 + 5a + 7}
$$

il numero $\textcolor{red}{4 \times 10^3 + 6 \times 10^2 + 5 \times 10^1 + 7 \times 10^0}$ si dice scritto in forma polinomiale.
