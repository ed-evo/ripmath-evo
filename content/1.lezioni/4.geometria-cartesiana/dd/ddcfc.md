# [Equazioni della tangente condotta da un punto sulla circonferenza]{.text-red}

Se il punto da cui inviare le tangenti si trova sulla circonferenza troveremo solo un'equazione, infatti le tangenti sono due coincidenti: Prova a pensare ad un punto esterno da cui mandi due tangenti ed [immagina di avvicinarlo](tg01.html) fino ad arrivare alla circonferenza.

Quindi il metodo sarà esattamente uguale al precedente, in più potremo dire che l'equazione che otterremo ponendo il Delta uguale a zero dovrà avere due soluzioni coincidenti, cioè il primo membro dell'equazione dovrà essere un quadrato perfetto (le soluzioni coincidenti si hanno se e solo se i termini dell'equazione formano un quadrato).

---

Vediamo un esempio pratico

Trovare l'equazione della tangente alla circonferenza

$$\textcolor{red}{x^2 + y^2 - 25 = 0}$$

condotte dal suo punto

$$\textcolor{red}{P(3,4)}$$

È la circonferenza di centro $$O(0,0)$$ e raggio $$5$$.

Per trovare l'equazione della retta tangente considero il fascio di rette passante per il punto $$P(3,4)$$

$$\textcolor{red}{y - 4 = m(x - 3)}$$

Faccio il sistema fra la circonferenza ed il fascio di rette

$$
\begin{cases}
\textcolor{red}{x^2 + y^2 - 25 = 0} \\
\textcolor{red}{y = mx - 3m + 4}
\end{cases}
$$

Sostituisco

$$
\begin{cases}
\textcolor{red}{x^2 + (mx - 3m + 4)^2 - 25 = 0} \\
\textcolor{red}{y = mx - 3m + 4}
\end{cases}
$$

Calcolo [Formula del quadrato del trinomio](../../a/ad/ad4cc.html)

$$
\begin{cases}
\textcolor{red}{x^2 + m^2x^2 + 9m^2 + 16 - 6m^2x + 8mx - 24m - 25 = 0} \\
\text{-----------------}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{x^2 + m^2x^2 - 6m^2x + 8mx + 9m^2 - 24m - 9 = 0} \\
\text{-----------------}
\end{cases}
$$

Raccolgo i termini con $$x^2$$, con $$x$$ ed i termini noti ed ottengo l'equazione risolvente

$$\textcolor{red}{x^2(1 + m^2) - 2x(3m^2 - 4m) + 9m^2 - 24m - 9 = 0}$$

Ora calcolo il discriminante (anzi il Delta quarti essendo il termine con la $$x$$ divisibile per $$2$$) $$(b/2)^2 - ac$$ e lo pongo uguale a zero, in tal modo determino i valori di $$m$$ per cui le rette del fascio sono tangenti

$$\textcolor{purple}{a = 1 + m^2}$$
$$\textcolor{purple}{b = -2(3m^2 - 4m)}$$
$$\textcolor{purple}{c = 9m^2 - 24m - 9}$$

$$\textcolor{blue}{(b/2)^2 - ac =}$$

$$\textcolor{red}{(3m^2 - 4m)^2 - (1 + m^2)(9m^2 - 24m - 9) = 0}$$

([calcoli](ddcfca.html))

$$\textcolor{red}{16m^2 + 24m + 9 = 0}$$

Come ci aspettavamo è un quadrato perfetto

$$\textcolor{red}{(4m + 3)^2 = 0}$$
$$\textcolor{red}{4m + 3 = 0}$$

$$\textcolor{red}{m = -\frac{3}{4}}$$

Sostituisco $$m$$ nell'equazione del fascio

$$y = mx - 3m + 4$$

$$\textcolor{red}{y = (-3/4)x - 3(-3/4) + 4}$$

L'equazione della retta tangente è

$$\textcolor{red}{y = -\frac{3}{4}x + \frac{25}{4}}$$

---

Vediamo anche un altro metodo che mi ha inviato Daniele: un visitatore del sito

---

> Si basa sul fatto che nella circonferenza la tangente in un suo punto è perpendicolare al raggio nel punto di contatto;
> Come calcoli è molto più semplice, ma ha il difetto di poter essere usato solo per la circonferenza e solo per la tangente ad un punto sulla circonferenza, mentre l'altro metodo è generale e si può usare anche per tutte le coniche.

---

Trovare l'equazione della tangente alla circonferenza

$$\textcolor{red}{x^2 + y^2 - 25 = 0}$$

condotte dal suo punto

$$\textcolor{red}{P(3,4)}$$

calcoliamo il [coefficiente angolare](../dc/dcebc.html) della retta $$OP$$

$$\textcolor{red}{m = \frac{4 - 0}{3 - 0} = \frac{4}{3}}$$

Quindi la tangente, essendo la [perpendicolare](../dc/dcega.html) avrà coefficiente angolare:

$$\textcolor{red}{m = -\frac{3}{4}}$$

quindi per trovare la tangente basterà prendere [l'equazione della retta passante per $$P$$](../dc/dcegb.html) e con coefficiente angolare uguale a $$-3/4$$

$$\textcolor{red}{y - 4 = -\frac{3}{4}(x - 3)}$$

moltiplico tutto per $$4$$ per togliere i denominatori

$$\textcolor{red}{4y - 16 = -3(x - 3)}$$
$$\textcolor{red}{4y - 16 = -3x + 9}$$
$$\textcolor{red}{4y = -3x + 25}$$

e quindi esplicitando

$$\textcolor{red}{y = -\frac{3}{4}x + \frac{25}{4}}$$