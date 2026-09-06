# <span class="text-red-600">Il modulo di una somma è minore o uguale alla somma dei moduli</span>

Se $p$ e $q$ sono numeri reali, vale sempre la disuguaglianza

$$
|p + q| \le |p| + |q|
$$

cioè

> **Il modulo di una somma è sempre minore o uguale alla somma dei moduli**

## Dimostrazione

Partiamo dalle disuguaglianze:
$-|p| \le p \le |p|$
$-|q| \le q \le |q|$

Tali disuguaglianze sono ovvie: infatti ogni numero reale è maggiore o uguale del suo modulo cambiato di segno ed è minore o uguale al suo modulo.

Sommo termine a termine:
$-|p| - |q| \le p + q \le |p| + |q|$

Raccolgo il meno, raggruppo con le parentesi e ottengo:
$-(|p| + |q|) \le (p + q) \le (|p| + |q|)$

Visto il risultato della pagina precedente, questo equivale a dire:
$$
|p + q| \le |p| + |q|
$$
come volevamo.

> **Spiego meglio il passaggio finale:**
>
> Dalla relazione
> $|a| \le b \iff -b \le a \le b$
>
> letta alla rovescia
> $-b \le a \le b \iff |a| \le b$
>
> se al posto di $a$ pongo $p + q$ e al posto di $b$ pongo $|p| + |q|$ ottengo
> $$
> -(|p| + |q|) \le (p + q) \le (|p| + |q|) \iff |p + q| \le |p| + |q|
> $$

[Pagina iniziale](../../../index.html) [Indice di algebra](../../a.html) [Pagina successiva](aggbc.html) [Pagina precedente](aggba.html)