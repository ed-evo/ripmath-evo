# Equazioni con più moduli

Se abbiamo più moduli si avranno in genere più intervalli da considerare e quindi più equazioni: vediamo un esempio con tre moduli.

Risolvere l'equazione
$$
|2x - 4| + |x + 3| + |x - 3| - x = 8
$$

Pongo gli argomenti dei moduli maggiori o uguali a zero ottenendo tre disequazioni:

1. $2x - 4 \ge 0 \implies 2x \ge 4 \implies x \ge 2$
2. $x + 3 \ge 0 \implies x \ge -3$
3. $x - 3 \ge 0 \implies x \ge 3$

Strategia dei segni:
- Intervallo per $x \ge 2$: $\text{--- (2) +++}$
- Intervallo per $x \ge -3$: $\text{--- (-3) +++}$
- Intervallo per $x \ge 3$: $\text{--- (3) +++}$

Ottengo gli intervalli:

- $(-\infty, -3)$ in questo intervallo tutte e tre le disequazioni non sono verificate quindi i termini interni al modulo devono essere presi col segno cambiato e l'equazione sarà
  $-2x + 4 - x - 3 - x + 3 - x = 8$
  sviluppando
  $-5x = 4$
- $[-3, 2)$ in questo intervallo la prima e la terza disequazione non sono verificate (quindi devo cambiare di segno i termini dei moduli) mentre invece è verificata la seconda (allora prendo con lo stesso segno i termini del secondo modulo) e l'equazione diventa
  $-2x + 4 + x + 3 - x + 3 - x = 8$
  sviluppando
  $-3x = -2 \implies 3x = 2$
- $[2, 3)$ in questo intervallo le prime due disequazioni sono verificate (i termini dei moduli vanno presi senza cambiarli di segno) mentre la terza non è verificata (quindi devo cambiare di segno i termini del modulo); l'equazione diventa
  $2x - 4 + x + 3 - x + 3 - x = 8$
  sviluppando
  $x = 6$
- $[3, +\infty)$ in questo intervallo tutte e tre le disequazioni sono verificate quindi i termini dei moduli vanno presi senza cambiarli di segno e l'equazione diventa
  $2x - 4 + x + 3 + x - 3 - x = 8$
  sviluppando
  $3x = 12$

Posso rappresentarlo sulla retta reale nel seguente modo:

$-5x = 4$ $\quad$ $3x = 2$ $\quad$ $x = 6$ $\quad$ $3x = 12$
$\text{—————} -3 \text{———————————————— } 2 \text{——————————— } 3 \text{———————}$

Naturalmente la soluzione è accettabile solo se cade dentro l'intervallo in cui considero l'equazione:

> Posso prendere per buona la soluzione della prima equazione solo se è minore di $-3$, posso accettare la soluzione della seconda solo se è compresa fra $-3$ e $2$, posso accettare la soluzione della terza solo se il risultato è compreso tra $2$ e $3$ e posso accettare la quarta se la soluzione è maggiore o uguale a $3$.

In pratica devo risolvere le quattro equazioni nel loro intervallo:

- risolviamo la prima
  se $x < -3$ considero
  $-5x = 4 \implies x = -4/5$
  non essendo questo valore minore di $-3$ non posso accettarlo
- risolviamo la seconda
  se $-3 \le x < 2$ considero
  $3x = 2 \implies x = 2/3$
  essendo questo valore compreso tra $-3$ e $2$ posso accettarlo
- risolviamo la terza
  se $2 \le x < 3$ considero
  $x = 6$
  non essendo questo valore compreso tra $2$ e $3$ non posso accettarlo
- risolviamo la quarta
  se $x \ge 3$ considero
  $3x = 12 \implies x = 4$
  essendo questo valore maggiore di $3$ posso accettarlo

Ho quindi due soluzioni:
$x = 2/3$
$x = 4$

[Pagina iniziale](../../../index.html) | [Indice di algebra](../../a.html) | [Pagina successiva](afc.html) | [Pagina precedente](afbhd.html)