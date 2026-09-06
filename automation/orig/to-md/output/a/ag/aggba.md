# <span class="text-red-600">Disuguaglianza fra un modulo ed un numero reale positivo</span>

Troveremo questa disuguaglianza soprattutto quando dovremo verificare il valore di un limite di successione o di funzione

Vale sempre, essendo $b$ un numero reale positivo;

$$
|a| \le b \iff -b \le a \le b
$$

ed anche

$$
|a| < b \iff -b < a < b
$$

Cioè se un modulo è minore di un numero reale si può togliere il modulo ponendone l'argomento compreso fra i valori negativo e positivo del numero reale:

> **Dimostrazione**
>
> $a$ può essere positivo, nullo oppure negativo
> prima considero il caso positivo o nullo, poi il caso negativo
>
> supponiamo che $a$ sia positivo o nullo allora avremo sicuramente $a \ge -b$
> ed inoltre essendo $|a| \le b$ questo implica $a \le b$ (per ipotesi $a$ è positivo e $b$ è positivo)
> quindi raccogliendo ottengo
> $-b \le a \le b$ come volevo
>
> Suppongo che $a$ sia negativo; allora risulta certamente $a < b$;
> inoltre la disuguaglianza $|a| < b$ implica $-a < b$ (per ipotesi $a$ è negativo e quindi $-a$ è positivo)
> essendo $b$ un numero reale positivo se moltiplico la disuguaglianza precedente per $-1$ ottengo la disuguaglianza vera $-b < a$,
> quindi raccogliendo ottengo
> $-b < a < b$ come volevo
>
> Raccogliendo assieme tutti i risultati ottengo che per qualunque $a \in \mathbb{R}$ vale
> $-b \le a \le b$ essendo $b$ un numero reale positivo

**Esempio**

Risolvere la seguente equazione

$|x - 4| \le 2x + 3$

applico la regola per togliere il modulo

$-2x - 3 \le x - 4 \le 2x + 3$

questa scrittura equivale a risolvere contemporaneamente le disequazioni

$$
\begin{cases}
-2x - 3 \le x - 4 \\
x - 4 \le 2x + 3
\end{cases}
$$

$$
\begin{cases}
-2x - x \le 3 - 4 \\
x - 2x \le 4 + 3
\end{cases}
$$

$$
\begin{cases}
-3x \le -1 \\
-x \le 7
\end{cases}
$$

cambio di segno e verso

$$
\begin{cases}
3x \ge 1 \\
x \ge -7
\end{cases}
$$

$$
\begin{cases}
x \ge 1/3 \\
x \ge -7
\end{cases}
$$

Siccome devo considerare ove sono entrambe verificate la soluzione sarà data dai valori comuni, cioè

$x \ge 1/3$

[Pagina iniziale](../../../index.html)
[Indice di algebra](../../a.html)
[Pagina successiva](aggbb.html)
[Pagina precedente](aggb.html)