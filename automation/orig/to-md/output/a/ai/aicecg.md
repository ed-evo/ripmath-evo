# [Soluzione generale di un sistema simmetrico]{.text-red}

Per risolverlo in modo automatico trasformiamo tutti i termini in gruppi del tipo $$x+y$$ ed $$xy$$, magari utilizzando anche le formule di Waring; una volta fatto ciò consideriamo due nuove variabili:

$$
\textcolor{red}{\begin{cases} 
x+y = s \\ 
xy = p 
\end{cases}}
$$

e sostituiamole; otterremo un sistema di due equazioni in due incognite che potremo risolvere con i metodi noti.

Trovare le soluzioni reali del sistema:

$$
\textcolor{red}{\begin{cases} 
x^2 + y^2 + x + y = 22 \\ 
x^3 + x^2y + xy^2 + y^3 = 85 
\end{cases}}
$$

Cerchiamo di evidenziare i gruppi $$x+y$$ ed $$xy$$; nella seconda equazione raccolgo $$xy$$ fra il secondo ed il terzo termine.

$$
\textcolor{red}{\begin{cases} 
x^2 + y^2 + (x + y) = 22 \\ 
x^3 + y^3 + xy(x + y) = 85 
\end{cases}}
$$

Ora applico le formule di Waring sia alla prima che alla seconda equazione:

$$
\textcolor{red}{\begin{cases} 
(x+y)^2 - 2xy + (x + y) = 22 \\ 
(x + y)^3 - 3xy(x + y) + xy(x + y) = 85 
\end{cases}}
$$

Sommo i fattori simili:

$$
\textcolor{red}{\begin{cases} 
(x+y)^2 - 2xy + (x + y) = 22 \\ 
(x + y)^3 - 2xy(x + y) = 85 
\end{cases}}
$$

Adesso pongo:

$$
\textcolor{red}{\begin{cases} 
x+y = s \\ 
xy = p 
\end{cases}}
$$

ed ottengo:

$$
\textcolor{red}{\begin{cases} 
s^2 - 2p + s = 22 \\ 
s^3 - 2sp = 85 
\end{cases}}
$$

Mi conviene ricavare $$2p$$ da sopra e sostituirne il valore nella seconda equazione:

$$
\textcolor{red}{\begin{cases} 
2p = s^2 + s - 22 \\ 
s^3 - s(s^2 + s - 22) = 85 
\end{cases}}
$$

Eseguo i calcoli:

$$
\textcolor{red}{\begin{cases} 
2p = s^2 + s - 22 \\ 
s^3 - s^3 - s^2 + 22s = 85 
\end{cases}}
$$

$$
\textcolor{red}{\begin{cases} 
2p = s^2 + s - 22 \\ 
s^2 - 22s + 85 = 0 
\end{cases}}
$$

La seconda equazione è un'equazione di secondo grado in $$s$$:

$$
\textcolor{red}{s^2 - 22s + 85 = 0}
$$

La risolvo ed ottengo:

$$
\textcolor{red}{s = 5 \quad s = 17}
$$

Ora sostituisco ad $$s$$ nella prima equazione una volta $$5$$ ed una volta $$17$$:

- Sostituisco $$5$$:
  $$
  \textcolor{red}{\begin{cases} 
  2p = 5^2 + 5 - 22 = 8 \\ 
  s = 5 
  \end{cases}}
  $$
  Divido per $$2$$ per ottenere $$p$$:
  $$
  \textcolor{red}{\begin{cases} 
  p = 4 \\ 
  s = 5 
  \end{cases}}
  $$

- Sostituisco $$17$$:
  $$
  \textcolor{red}{\begin{cases} 
  2p = 17^2 + 17 - 22 = 284 \\ 
  s = 17 
  \end{cases}}
  $$
  Divido per $$2$$ per ottenere $$p$$:
  $$
  \textcolor{red}{\begin{cases} 
  p = 142 \\ 
  s = 17 
  \end{cases}}
  $$

Ora, sostituendo ad $$s$$ e $$p$$ le loro espressioni ottengo i due sistemi:

$$
\textcolor{red}{\begin{cases} 
x + y = 5 \\ 
xy = 4 
\end{cases}} \quad \textcolor{red}{\begin{cases} 
x + y = 17 \\ 
xy = 142 
\end{cases}}
$$

Risolvo il primo:

$$
\textcolor{red}{\begin{cases} 
x + y = 5 \\ 
xy = 4 
\end{cases}}
$$

Considero l'equazione associata:

$$
\textcolor{blue}{z^2 - 5z + 4 = 0}
$$

Risolvo ed ottengo:

$$
\textcolor{blue}{z_1 = 1}
$$
$$
\textcolor{blue}{z_2 = 4}
$$

Ho quindi le soluzioni:

$$
\textcolor{blue}{\begin{cases} 
x_1 = 1 \\ 
y_1 = 4 
\end{cases}} \quad \textcolor{blue}{\begin{cases} 
x_2 = 4 \\ 
y_2 = 1 
\end{cases}}
$$

Risolvo il secondo:

$$
\textcolor{red}{\begin{cases} 
x + y = 17 \\ 
xy = 142 
\end{cases}}
$$

Considero l'equazione associata:

$$
\textcolor{blue}{z^2 - 17z + 142 = 0}
$$

Risolvo ed ottengo il termine sotto radice minore di zero:

$$
\textcolor{blue}{\Delta = 289 - 568 = -279 < 0}
$$

Quindi non ho soluzioni reali.

Raccogliendo ho le $$2$$ soluzioni reali:

$$
\textcolor{blue}{\begin{cases} 
x_1 = 1 \\ 
y_1 = 4 
\end{cases}} \quad \textcolor{blue}{\begin{cases} 
x_2 = 4 \\ 
y_2 = 1 
\end{cases}}
$$

> Come vedi non è che si lavori di meno, si lavora in modo automatico senza dover pensare, cosa che è del tutto contraria alla Matematica. Può servire al massimo come metodo per scrivere un programma per calcolatore che risolva automaticamente i sistemi simmetrici.