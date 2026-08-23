# [Sistemi di grado superiore]{.text-red}

Per risolvere un sistema di grado superiore occorre risolvere un'equazione di grado superiore al secondo.
Vediamo un esercizio: Risolvere il sistema

$$
\textcolor{red}{\begin{cases} x^2 + y^2 = 37 \\ xy = 6 \end{cases}}
$$

è un sistema di quarto grado perché le due equazioni che lo compongono sono di secondo grado, quindi ci aspettiamo una equazione di quarto grado e quindi con $$4$$ soluzioni.

ricavo $$y$$ dalla seconda equazione

$$
\textcolor{red}{\begin{cases} x^2 + y^2 = 37 \\ y = 6/x \end{cases}}
$$

devo però porre la condizione $$\textcolor{red}{x \neq 0}$$
ora vado a sostituire il valore della $$y$$ trovato al posto della $$y$$ nella prima equazione

$$
\textcolor{red}{x^2 + (6/x)^2 = 37}
$$

sviluppo il quadrato sia al numeratore che al denominatore

$$
\textcolor{red}{x^2 + 36/x^2 = 37}
$$

ora faccio il minimo comune multiplo $$x^2$$

$$
\textcolor{red}{\frac{x^4 + 36}{x^2} = \frac{37x^2}{x^2}}
$$

avendo supposto $$x$$ diverso da zero posso eliminare il denominatore

$$
\textcolor{red}{x^4 + 36 = 37x^2}
$$

$$
\textcolor{red}{x^4 - 37x^2 + 36 = 0}
$$

ora devo risolvere l'equazione biquadratica

$$
\textcolor{red}{x^4 - 37x^2 + 36 = 0}
$$

ottengo le $$4$$ soluzioni

$$
\textcolor{red}{x_1 = -6 \quad x_2 = -1 \quad x_3 = 1 \quad x_4 = 6}
$$

Ora devo sostituire i valori trovati uno alla volta alla $$x$$ nella seconda equazione per trovare il valore della $$y$$

- Primo valore $$\textcolor{red}{x_1 = -6}$$
  $$
  \textcolor{red}{\begin{cases} x = -6 \\ y = 6/(-6) \end{cases}}
  $$
  $$
  \textcolor{red}{\begin{cases} x_1 = -6 \\ y_1 = -1 \end{cases}}
  $$

- Secondo valore $$\textcolor{red}{x_2 = -1}$$
  $$
  \textcolor{red}{\begin{cases} x = -1 \\ y = 6/(-1) \end{cases}}
  $$
  $$
  \textcolor{red}{\begin{cases} x_2 = -1 \\ y_2 = -6 \end{cases}}
  $$

- Terzo valore $$\textcolor{red}{x_3 = 1}$$
  $$
  \textcolor{red}{\begin{cases} x = 1 \\ y = 6/1 \end{cases}}
  $$
  $$
  \textcolor{red}{\begin{cases} x_3 = 1 \\ y_3 = 6 \end{cases}}
  $$

- Quarto valore $$\textcolor{red}{x_4 = 6}$$
  $$
  \textcolor{red}{\begin{cases} x = 6 \\ y = 6/6 \end{cases}}
  $$
  $$
  \textcolor{red}{\begin{cases} x_4 = 6 \\ y_4 = 1 \end{cases}}
  $$

Ottengo quindi le soluzioni ($$4$$ come avevamo previsto)

$$
\textcolor{blue}{\begin{cases} x_1 = -6 \\ y_1 = -1 \end{cases}} \quad
\textcolor{blue}{\begin{cases} x_2 = -1 \\ y_2 = -6 \end{cases}} \quad
\textcolor{blue}{\begin{cases} x_3 = 1 \\ y_3 = 6 \end{cases}} \quad
\textcolor{blue}{\begin{cases} x_4 = 6 \\ y_4 = 1 \end{cases}}
$$