# [Equazione della circonferenza passante per tre punti assegnati]{.text-red}

Per tre punti non allineati passa una ed una sola circonferenza.
Date le coordinate di tre punti vogliamo risalire all'equazione della circonferenza.

> (naturalmente il problema si può anche risolvere [geometricamente](ddcgaa.html))

Per semplicità risolviamo il problema su un esempio pratico.

> Se hai bisogno anche della spiegazione [teorica](ddcgab.html)

Trovare l'equazione della circonferenza passante per i punti [$$O(0,0)$$ $$A(6,0)$$ $$B(0,3)$${.text-blue}]

Prendo l'equazione generica della circonferenza:

$$
\textcolor{red}{x^2 + y^2 + ax + by + c = 0}
$$

- Prima condizione: passaggio per [$$O=(0,0)$${.text-blue}]
  Sostituisco le coordinate nell'equazione della circonferenza:
  $$
  \textcolor{blue}{0^2 + 0^2 + a(0) + b(0) + c = 0}
  $$
  $$
  \textcolor{blue}{c = 0}
  $$

- Seconda condizione: passaggio per [$$A=(6,0)$${.text-blue}]
  Sostituisco le coordinate nell'equazione della circonferenza:
  $$
  \textcolor{blue}{6^2 + 0^2 + a(6) + b(0) + c = 0}
  $$
  $$
  \textcolor{blue}{36 + 6a + c = 0}
  $$
  $$
  \textcolor{blue}{6a + c = -36}
  $$

- Terza condizione: passaggio per [$$B=(0,3)$${.text-blue}]
  Sostituisco le coordinate nell'equazione della circonferenza:
  $$
  \textcolor{blue}{0^2 + 3^2 + a(0) + b(3) + c = 0}
  $$
  $$
  \textcolor{blue}{9 + 3b + c = 0}
  $$
  $$
  \textcolor{blue}{3b + c = -9}
  $$

Le tre condizioni devono valere [contemporaneamente](../../a/ai/aia.html); faccio il sistema:

$$
\textcolor{blue}{\begin{cases} c = 0 \\ 6a + c = -36 \\ 3b + c = -9 \end{cases}}
$$

Sostituisco $$c = 0$$ nella seconda e nella terza:

$$
\textcolor{blue}{\begin{cases} c = 0 \\ 6a = -36 \\ 3b = -9 \end{cases}}
$$

$$
\textcolor{blue}{\begin{cases} c = 0 \\ a = -6 \\ b = -3 \end{cases}}
$$

L'equazione cercata è:

$$
\textcolor{blue}{x^2 + y^2 - 6x - 3y = 0}
$$