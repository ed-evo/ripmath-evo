# [Unicità dell'elemento simmetrico]{.text-red}

**Proprietà:**
*In ogni gruppo $(A, \ast)$ per ogni elemento $a$ esiste un solo elemento simmetrico.*

---

> **Dimostrazione:**
>
> Ipotesi: $(A, \ast)$ è un gruppo
> Tesi: per ogni elemento $a$ è unico $a'$ tale che $a \ast a' = n$
>
> Per definizione di gruppo dato un elemento $a$ il simmetrico deve esistere quindi basterà dimostrare che ce n'è uno solo (è unico).
>
> Per assurdo supponiamo che, dato l'elemento $a$ esistano due elementi simmetrici $a'$ ed $a''$, allora avrò per definizione di elemento simmetrico:
>
> 1. $$
> \textcolor{red}{a \ast a' = a' \ast a = n}
> $$
> 2. $$
> \textcolor{red}{a \ast a'' = a'' \ast a = n}
> $$
>
> Sviluppo $a'$ fino ad ottenere $a''$:
>
> $$
> \textcolor{red}{a' = a' \ast n =}
> $$
>
> al posto di $n$ metto $(a \ast a'')$:
>
> $$
> \textcolor{red}{= a' \ast (a \ast a'') =}
> $$
>
> Uso la proprietà associativa per collegare $a$ con $a'$:
>
> $$
> \textcolor{red}{= (a' \ast a) \ast a'' =}
> $$
>
> Ma $(a' \ast a) = n$ quindi:
>
> $$
> \textcolor{red}{= n \ast a'' =}
> $$
>
> e, per la proprietà dell'elemento neutro $n$:
>
> $$
> \textcolor{red}{= a''}
> $$
>
> Quindi leggendo il primo e l'ultimo termine dell'eguaglianza ottengo:
>
> $$
> \textcolor{red}{a' = a''}
> $$
>
> Cioè se esistono due elementi simmetrici essi sono uguali, come volevamo dimostrare.