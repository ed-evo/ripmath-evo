# [Ogni elemento è semplificabile]{.text-red}

**Proprietà:**

*In ogni gruppo $(A ; \circledast)$ per ogni elemento $a, b, c$ da*

$$
a \circledast b = a \circledast c
$$

*segue*

$$
b = c
$$

Cioè posso togliere la $a$, sarebbe a dire che ogni elemento si ottiene da un altro in modo unico.

> **Dimostrazione:**
>
> **Ipotesi:** $(A ; \circledast)$ è un gruppo, $a \circledast b = a \circledast c$
>
> **Tesi:** $b = c$
>
> Partiamo dall'uguaglianza dell'ipotesi. Per arrivare alla tesi dobbiamo eliminare la $a$, quindi componiamo i due membri dell'uguaglianza con $a'$ (un elemento si elimina con il suo inverso):
>
> $$
> \textcolor{red}{a' \circledast ( a \circledast b) = a' \circledast ( a \circledast c)}
> $$
>
> Ora applico la proprietà associativa in modo da mettere $a'$ con $a$:
>
> $$
> \textcolor{red}{( a' \circledast a ) \circledast b = ( a' \circledast a ) \circledast c}
> $$
>
> Ora so che $( a' \circledast a )$ è l'elemento neutro $n$:
>
> $$
> \textcolor{red}{n \circledast b = n \circledast c}
> $$
>
> E, per definizione di elemento neutro:
>
> $$
> \textcolor{red}{b = c}
> $$
>
> Come volevamo dimostrare.