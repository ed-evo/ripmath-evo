# [Teorema di Carnot]{.text-red}
[o teorema di Pitagora generalizzato](idfa.html)

---

Questo è uno di quei pochi teoremi che è assolutamente necessario sapere e saper applicare.
Equivale al secondo criterio di congruenza: conoscendo due lati e l'angolo compreso posso trovare il terzo lato.

[esempio](idfb.html)

---

**Teorema:**

> [In ogni triangolo il quadrato di un lato è uguale alla somma dei quadrati degli altri due lati meno il doppio prodotto degli stessi lati per il coseno dell' angolo fra essi compreso]{.text-blue}

$$
\textcolor{red}{a^2 = b^2 + c^2 - 2bc \cos \alpha}
$$
$$
\textcolor{red}{b^2 = a^2 + c^2 - 2ac \cos \beta}
$$
$$
\textcolor{red}{c^2 = a^2 + b^2 - 2ab \cos \gamma}
$$

---

Dimostriamo la prima relazione.
Prendiamo le relazioni delle proiezioni:

$$
\textcolor{red}{a = b \cos \gamma + c \cos \beta}
$$
$$
\textcolor{red}{b = a \cos \gamma + c \cos \alpha}
$$
$$
\textcolor{red}{c = a \cos \beta + b \cos \alpha}
$$

Moltiplichiamo la prima relazione per $$\textcolor{red}{a}$$.
Moltiplichiamo la seconda relazione per $$\textcolor{red}{-b}$$.
Moltiplichiamo la terza relazione per $$\textcolor{red}{-c}$$.

$$
\textcolor{red}{a^2 = ab \cos \gamma + ac \cos \beta}
$$
$$
\textcolor{red}{-b^2 = -ab \cos \gamma - bc \cos \alpha}
$$
$$
\textcolor{red}{-c^2 = -ac \cos \beta - bc \cos \alpha}
$$

Sommiamo tra loro tutti i termini prima dell'uguale e tutti i termini dopo l'uguale: essendo delle uguaglianze il risultato è ancora un'uguaglianza:

$$
\textcolor{red}{a^2 - b^2 - c^2 = ab \cos \gamma + ac \cos \beta - ab \cos \gamma - bc \cos \alpha - ac \cos \beta - bc \cos \alpha}
$$

Sommo i termini simili:

$$
\textcolor{red}{a^2 - b^2 - c^2 = -2bc \cos \alpha}
$$

E quindi:

$$
\textcolor{red}{a^2 = b^2 + c^2 - 2bc \cos \alpha}
$$

Come volevamo.

---

> Anche le altre relazioni si dimostrano nello stesso modo: prova a farle da solo per esercizio e poi confronta i risultati:
>
> Per la seconda moltiplica la prima per $$-a$$ la seconda per $$b$$ e la terza per $$-c$$.
> Per la terza moltiplica la prima per $$-a$$, la seconda per $$-b$$ e la terza per $$c$$.
>
> Dimostrazione della [seconda](idfc.html)
> Dimostrazione della [terza](idfd.html)

---

Equivale anche al terzo criterio di congruenza dei triangoli: conoscendo i tre lati posso trovare gli angoli con le [formule inverse](idff.html).

$$
\textcolor{red}{\cos \alpha = \frac{- a^2 + b^2 + c^2}{2bc}}
$$

$$
\textcolor{red}{\cos \beta = \frac{a^2 - b^2 + c^2}{2ac}}
$$

$$
\textcolor{red}{\cos \gamma = \frac{a^2 + b^2 - c^2}{2ab}}
$$

Vediamo un semplice [esempio](idfe.html).