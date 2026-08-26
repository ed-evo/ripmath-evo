# Cos'è un sistema di numerazione

**Un sistema di numerazione è ogni complesso di regole e simboli che servano per scrivere e leggere i numeri**

Siccome noi, normalmente contiamo a base $10$, cioè raggruppiamo ogni $10$, avremo, nel sistema di numerazione decimale:

**$10$ simboli $0, 1, 2, 3, 4, 5, 6, 7, 8, 9$ chiamati cifre**

una regola "posizionale", cioè la regola che:

**ogni cifra ha valore secondo la sua posizione**

> **Esempio:** $131$ nel nostro sistema di numerazione decimale significa che, partendo da sinistra, il primo $1$ rappresenta un gruppo di $10$ al secondo ordine (centinaia), mentre il terzo $1$ rappresenta una cifra e basta (gruppo di ordine $0$ o unità).

È possibile utilizzare un qualunque insieme di cifre superiore a $1$ per costruire un qualunque sistema di numerazione: ciò è dovuto al fatto che possiamo sempre rappresentare un numero in **forma polinomiale**.

Forma polinomiale: ogni numero è rappresentabile come:

$$
a \cdot x^{n} + b \cdot x^{n-1} + \dots + c \cdot x^{2} + d \cdot x + e
$$

o meglio:

$$
a \cdot x^{n} + b \cdot x^{n-1} + \dots + c \cdot x^{2} + d \cdot x^{1} + e \cdot x^{0}
$$

con $x$ base del sistema di numerazione e $a, b, c, d, e, f, \dots$ cifre che possono anche ripetersi (al massimo possono essere $x$).

> **Ricordo:** $x^{1} = x$ e $x^{0} = 1$

Così, se voglio rappresentare il numero dato dalle seguenti tacche (le metto a gruppi di $5$ per farvele vedere meglio, ma dovrebbero essere senza spazi):

[///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///]{.text-red-darken-1}

- in forma decimale
Posso usare le cifre $0, 1, 2, 3, 4, 5, 6, 7, 8, 9$
Raggruppo a gruppi di $10$ con le parentesi tonde, ottengo:

[(///// /////) (///// /////) (///// /////) (///// /////) (///// /////) (///// /////) ///// ///]{.text-red-darken-1}

Ho $6$ raggruppamenti da $10$ e $8$ non raggruppati, cioè $68_{10}$, o anche, in forma polinomiale:

$$
68_{10} = 6 \cdot 10 + 8
$$

cioè $6$ decine ed $8$ unità.

- in base $5$
Posso usare solo le cifre $0, 1, 2, 3, 4$
Raggruppo a gruppi di $5$ con le parentesi tonde, ottengo:

[(/////) (/////) (/////) (/////) (/////) (/////) (/////) (/////) (/////) (/////) (/////) (/////) (/////) ///]{.text-red-darken-1}

Siccome i termini raggruppati sono superiori a $4$, devo fare un loro raggruppamento $5$ a $5$ (chiamiamole venticinquine), lo indico con la parentesi quadra:

[[(/////) (/////) (/////) (/////) (/////)] [(/////) (/////) (/////) (/////) (/////)] (/////) (/////) (/////) ///]{.text-red-darken-1}

Ho $2$ raggruppamenti del secondo ordine, $3$ raggruppamenti del primo ordine e $3$ non raggruppati, cioè $233_{5}$, o anche, in forma polinomiale:

$$
233_{5} = 2 \cdot 5^{2} + 3 \cdot 5 + 3
$$

cioè $2$ venticinquine più $3$ cinquine più $3$ unità.

- in base $3$
Posso usare solo le cifre $0, 1, 2$
Raggruppo a gruppi di $3$, ottengo:

[(///) (///) (///) (///) (///) (///)/(///) (///) (///) (///) (///) (///) (///) (///) (///) (///) (///) (///) (///) (///) (///) (///)/]{.text-red-darken-1}

Siccome i termini raggruppati sono superiori a $2$, devo fare un loro raggruppamento $3$ a $3$ (diciamoli gruppi $3^{2}$), lo indico con la parentesi quadra:

[[(///) (///) (///)] [(///) (///) (///)] [(///) (///) (///)] [(///) (///) (///)] [(///) (///) (///)] [(///) (///) (///)] [(///) (///) (///)] (///) //]{.text-red-darken-1}

Siccome i termini con parentesi quadra raggruppati sono superiori a $2$, devo fare ancora un loro raggruppamento $3$ a $3$ (diciamoli gruppi $3^{3}$), lo indico con la parentesi graffa:

[\{[(///) (///) (///)] [(///) (///) (///)] [(///) (///) (///)]\} \{[(///) (///) (///)] [(///) (///) (///)] [(///) (///) (///)]\} [(///) (///) (///)] (///) //]{.text-red-darken-1}

Ho $2$ raggruppamenti del terzo ordine ($3^{3}$), $1$ raggruppamento del secondo ordine ($3^{2}$), $1$ raggruppamento del primo ordine e $2$ non raggruppati, cioè $2112_{3}$, o anche, in forma polinomiale:

$$
2112_{3} = 2 \cdot 3^{3} + 1 \cdot 3^{2} + 1 \cdot 3 + 2
$$

cioè $2$ gruppi $3^{3}$ più un gruppo $3^{2}$ più una terna più $2$ unità.

Notiamo che, più abbassiamo la base, più diventa difficile per noi leggere il numero e complicato lo scriverlo: se però riusciamo a utilizzare solo due cifre ($0$ ed $1$) allora il numero sarà ancora più complicato, ma potremo farlo leggere a una macchina, associando magari lo $0$ alla mancanza di corrente e l'$1$ al passaggio di corrente e poi saranno problemi della macchina dover trattare numeri complicati (tanto le macchine non possono protestare).