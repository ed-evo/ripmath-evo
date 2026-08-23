# [Formule di Briggs]{.text-red}

Le formule di Briggs ci permettono di esprimere il seno, il coseno e la tangente dell'angolo metà mediante i lati del triangolo.

Per dimostrarle partiamo dalle formule di bisezione per il seno ed il coseno: essendo un angolo di un triangolo sempre minore dell'angolo piatto, l'angolo metà sarà sempre minore di un angolo retto, cioè sarà acuto, quindi nelle formule avremo davanti alla radice sempre il segno positivo.

$$
\textcolor{blue}{\sin \frac{\alpha}{2} = \sqrt{\frac{1 - \cos \alpha}{2}}}
$$

$$
\textcolor{blue}{\cos \frac{\alpha}{2} = \sqrt{\frac{1 + \cos \alpha}{2}}}
$$

Dalle formule inverse del teorema di Carnot abbiamo visto ([in fondo alla pagina](../id/idf.html)) che il coseno si può esprimere:

$$
\textcolor{blue}{\cos \alpha = \frac{b^2 + c^2 - a^2}{2bc}}
$$

Sostituiamo al coseno (sotto radice) la sua espressione: avremo

$$
\textcolor{blue}{\sin \frac{\alpha}{2} = \sqrt{\frac{1 - \frac{b^2 + c^2 - a^2}{2bc}}{2}}}
$$

$$
\textcolor{blue}{\cos \frac{\alpha}{2} = \sqrt{\frac{1 + \frac{b^2 + c^2 - a^2}{2bc}}{2}}}
$$

[Calcoli prima formula](ieacaa.html) | [Calcoli seconda formula](ieacab.html)

ed otteniamo

$$
\textcolor{blue}{\sin \frac{\alpha}{2} = \sqrt{\frac{(a+b-c)(a-b+c)}{4bc}}}
$$

$$
\textcolor{blue}{\cos \frac{\alpha}{2} = \sqrt{\frac{(a+b+c)(b+c-a)}{4bc}}}
$$

Poniamo ora
$$\textcolor{blue}{a+b+c = 2p}$$
in questo modo avremo le relazioni:

- $$\textcolor{blue}{b+c-a = 2(p-a)}$$ [Calcolo](ieacac.html)
- $$\textcolor{blue}{a-b+c = 2(p-b)}$$ [Calcolo](ieacad.html)
- $$\textcolor{blue}{a+b-c = 2(p-c)}$$ [Calcolo](ieacae.html)

$$
\textcolor{blue}{\sin \frac{\alpha}{2} = \sqrt{\frac{4(p-b)(p-c)}{4bc}}}
$$

$$
\textcolor{blue}{\cos \frac{\alpha}{2} = \sqrt{\frac{4p(p-a)}{4bc}}}
$$

e semplificando per $$4$$

$$
\textcolor{blue}{\sin \frac{\alpha}{2} = \sqrt{\frac{(p-b)(p-c)}{bc}}}
$$

$$
\textcolor{blue}{\cos \frac{\alpha}{2} = \sqrt{\frac{p(p-a)}{bc}}}
$$

e dividendo fra loro le due relazioni ottengo la relazione per la tangente [Calcoli](ieacaf.html)

$$
\textcolor{blue}{\tan \frac{\alpha}{2} = \sqrt{\frac{(p-b)(p-c)}{p(p-a)}}}
$$

***

Qui di seguito metto le varie formule di Briggs relative ai vari angoli del triangolo:

- per $$\alpha$$
  $$
  \textcolor{blue}{\sin \frac{\alpha}{2} = \sqrt{\frac{(p-b)(p-c)}{bc}}}
  $$
  $$
  \textcolor{blue}{\cos \frac{\alpha}{2} = \sqrt{\frac{p(p-a)}{bc}}}
  $$
  $$
  \textcolor{blue}{\tan \frac{\alpha}{2} = \sqrt{\frac{(p-b)(p-c)}{p(p-a)}}}
  $$

- per $$\beta$$
  $$
  \textcolor{blue}{\sin \frac{\beta}{2} = \sqrt{\frac{(p-a)(p-c)}{ac}}}
  $$
  $$
  \textcolor{blue}{\cos \frac{\beta}{2} = \sqrt{\frac{p(p-b)}{ac}}}
  $$
  $$
  \textcolor{blue}{\tan \frac{\beta}{2} = \sqrt{\frac{(p-a)(p-c)}{p(p-b)}}}
  $$

- per $$\gamma$$
  $$
  \textcolor{blue}{\sin \frac{\gamma}{2} = \sqrt{\frac{(p-a)(p-b)}{ab}}}
  $$
  $$
  \textcolor{blue}{\cos \frac{\gamma}{2} = \sqrt{\frac{p(p-c)}{ab}}}
  $$
  $$
  \textcolor{blue}{\tan \frac{\gamma}{2} = \sqrt{\frac{(p-a)(p-b)}{p(p-c)}}}
  $$