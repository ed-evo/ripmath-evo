Determinare i punti di massimo, minimo e flesso orizzontale per la seguente funzione in tutto l'intervallo di definizione:

$$\textcolor{red}{y = \frac{x}{x^2 + 1}}$$

L'intervallo di definizione è tutto $$\mathbb{R}$$.

Trovo la derivata prima e la pongo uguale a zero:

$$
\textcolor{red}{y' = \frac{1 \cdot (x^2 + 1) - x \cdot 2x}{(x^2 + 1)^2}}
$$

$$
\textcolor{red}{y' = \frac{1 - x^2}{(x^2 + 1)^2}}
$$

$$
\textcolor{red}{\frac{1 - x^2}{(x^2 + 1)^2} = 0}
$$

Una frazione è zero quando è zero il numeratore:

$$\textcolor{red}{1 - x^2 = 0}$$
$$\textcolor{red}{x^2 - 1 = 0}$$
$$\textcolor{red}{x^2 = 1}$$
$$\textcolor{red}{x = \pm 1}$$

Ho trovato due valori per cui potrei avere dei massimi, minimi o flessi. Trovo i valori della $$y$$ corrispondente sostituendo una volta $$+1$$ e l'altra $$-1$$ al posto di $$x$$ nell'equazione di partenza:

- $$\textcolor{red}{y(1) = \frac{1}{1^2 + 1} = 1/2}$$
- $$\textcolor{red}{y(-1) = \frac{-1}{(-1)^2 + 1} = -1/2}$$

I punti estremanti sono:
$$\textcolor{red}{A(-1, -1/2) \quad B(1, 1/2)}$$

Per sapere se sono dei massimi, minimi o flessi conviene studiare la derivata prima perché, essendo il denominatore sempre positivo (quadrato di due termini positivi), basterà studiarne il numeratore:

$$\textcolor{red}{y' > 0}$$
$$\textcolor{red}{1 - x^2 > 0}$$
$$\textcolor{red}{x^2 - 1 < 0}$$

L'espressione è verificata per valori interni all'intervallo delle radici.

***

**Studio del segno di $$y'$$:**

- Per $$x < -1$$: $$y' < 0$$ (decrescente)
- Per $$-1 < x < 1$$: $$y' > 0$$ (crescente)
- Per $$x > 1$$: $$y' < 0$$ (decrescente)

Di conseguenza:
- In $$x = -1$$ abbiamo un [minimo]{.text-blue}.
- In $$x = 1$$ abbiamo un [Massimo]{.text-blue}.

***

> **Nota:** Come completamento dell'esercizio, proviamo a trovare i flessi obliqui. Trovo la derivata seconda e la pongo uguale a zero (naturalmente, se si parte con l'intenzione di trovare i flessi per determinare i massimi e i minimi, conviene usare il metodo della derivata seconda).

$$
\textcolor{red}{y'' = \frac{-2x \cdot (x^2 + 1)^2 - (1 - x^2) \cdot 2(x^2 + 1)2x}{(x^2 + 1)^4}}
$$

$$
\textcolor{red}{y'' = \frac{-2x \cdot (3 - x^2)}{(x^2 + 1)^3}}
$$

Una frazione è zero quando è zero il numeratore, quindi:
$$\textcolor{red}{-2x \cdot (3 - x^2) = 0}$$

Quindi abbiamo:
$$\textcolor{red}{x(3 - x^2) = 0}$$

Abbiamo tre soluzioni: l'origine $$\textcolor{red}{O(0,0)}$$ e i punti di ascissa $$\textcolor{red}{x = \pm \sqrt{3}}$$.

Invece di trovare la derivata terza, mi conviene studiare la derivata seconda:

$$
\textcolor{red}{y'' = \frac{-2x \cdot (3 - x^2)}{(x^2 + 1)^3} > 0}
$$

Essendo $$(x^2 + 1)$$ sempre positivo, lo studio del segno si riduce a:
$$\textcolor{red}{-2x(3 - x^2) > 0}$$

Ciò è, la derivata seconda è positiva quando quest'espressione è positiva. Pongo tutte le sue parti positive: l'espressione sarà verificata dove ottengo come prodotto il segno meno (essendovi un meno davanti all'espressione), quindi:

- $$x > 0 \implies \text{segno } (- \dots 0 \dots +)$$
- $$(3 - x^2) > 0 \implies \text{segno } (- \dots -\sqrt{3} \dots + \dots +\sqrt{3} \dots -)$$
- **Prodotto:** $$(+ \dots -\sqrt{3} \dots - \dots 0 \dots + \dots +\sqrt{3} \dots + \dots -)$$

L'espressione è verificata dove il prodotto è negativo (sempre per il segno meno davanti al numeratore), cioè la derivata seconda è positiva negli intervalli:

$$\textcolor{red}{[-\sqrt{3}, 0] \cup [\sqrt{3}, +\infty)}$$

Quindi:
- Da meno infinito a $$-\sqrt{3}$$ la concavità è verso il basso;
- Da $$-\sqrt{3}$$ a zero è verso l'alto;
- Da zero a $$\sqrt{3}$$ è verso il basso;
- Da $$\sqrt{3}$$ a più infinito è verso l'alto.

Quindi la funzione ha tre punti di flesso indicati in figura con i punti [C O D]{.text-green}.