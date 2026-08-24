# [Distanza fra due punti accessibili ma non visibili tra loro]{.text-red}

Supponiamo di voler calcolare la distanza fra due punti $B$ e $C$ ma che fra essi ci sia un ostacolo (nella figura una specie di casetta).

Possiamo calcolare le distanze $AB$ e $AC$ ed inoltre l'angolo $BAC$.

> Per calcolare $AB$ ed $AC$ possiamo usare un decametro a nastro e per misurare l'angolo si usa un teodolite (in futuro fare link).

Abbiamo quindi il triangolo $ABC$ in cui conosciamo due lati e l'angolo compreso, quindi per calcolare il terzo lato possiamo usare, ad esempio, il [teorema di Carnot](../id/idf.html).

$$
\textcolor{red}{BC^2 = AB^2 + AC^2 - 2 \cdot AB \cdot AC \cos \alpha}
$$

quindi

$$
\textcolor{red}{BC = \sqrt{AB^2 + AC^2 - 2 \cdot AB \cdot AC \cos \alpha}}
$$

> **Esercizio:**
>
> Supponiamo di avere:
>
> $AB = 20\text{ m}$
> $AC = 30\text{ m}$
> $BAC = 120^\circ$
>
> $$
> BC = \sqrt{20^2 + 30^2 - 2 \cdot 20 \cdot 30 \cdot \cos 120^\circ} = \sqrt{400 + 900 - 1200 \cdot (-0,5)} = \sqrt{1900} = 43,6\text{ m}
> $$