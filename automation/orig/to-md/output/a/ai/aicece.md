Risolvere il sistema:

$$
\textcolor{red}{\begin{cases} x^2 + y^2 + 2x + 2y = 23 \\ x^2 + y^2 + xy = 19 \end{cases}}
$$

Facciamo qualche passaggio per semplificare un po'.
Qui mi conviene ricavare $(x^2 + y^2)$ dalla seconda equazione e sostituire nella prima:

$$
\textcolor{blue}{\begin{cases} x^2 + y^2 + 2x + 2y = 23 \\ x^2 + y^2 = 19 - xy \end{cases}}
$$

$$
\textcolor{blue}{\begin{cases} 19 - xy + 2x + 2y = 23 \\ x^2 + y^2 = 19 - xy \end{cases}}
$$

$$
\textcolor{blue}{\begin{cases} 2x + 2y - xy = 23 - 19 \\ x^2 + y^2 = 19 - xy \end{cases}}
$$

$$
\textcolor{blue}{\begin{cases} 2(x + y) - xy = 4 \\ x^2 + y^2 + xy = 19 \end{cases}}
$$

Adesso applico la prima formula di Waring alla seconda equazione:

$$
\textcolor{blue}{\begin{cases} 2(x + y) - xy = 4 \\ (x + y)^2 - 2xy + xy = 19 \end{cases}}
$$

$$
\textcolor{blue}{\begin{cases} 2(x + y) - xy = 4 \\ (x + y)^2 - xy = 19 \end{cases}}
$$

Sottraggo fra loro la prima equazione dalla seconda e la metto a sistema con una delle due equazioni, ad esempio la prima (è la più semplice):

$$
\textcolor{blue}{\begin{cases} (x + y)^2 - 2(x + y) = 15 \\ 2(x + y) - xy = 4 \end{cases}}
$$

Considero ora la prima equazione: si può considerare un'equazione di secondo grado nell'incognita $(x + y) = t$:

$$
\textcolor{blue}{t^2 - 2t - 15 = 0}
$$

che ha soluzioni (calcoli):

$$
\textcolor{blue}{t_1 = -3}
$$
$$
\textcolor{blue}{t_2 = 5}
$$

Ottengo i due sistemi equivalenti al sistema di partenza:

$$
\textcolor{red}{\begin{cases} x + y = -3 \\ 2(x + y) - xy = 4 \end{cases}} \quad \textcolor{red}{\begin{cases} x + y = 5 \\ 2(x + y) - xy = 4 \end{cases}}
$$

***

Risolvo il primo:

$$
\textcolor{red}{\begin{cases} x + y = -3 \\ 2(x + y) - xy = 4 \end{cases}}
$$

Sostituisco nella seconda $-3$ al posto di $(x + y)$:

$$
\textcolor{red}{\begin{cases} x + y = -3 \\ 2(-3) - xy = 4 \end{cases}}
$$

$$
\textcolor{red}{\begin{cases} x + y = -3 \\ -xy = 4 + 6 \end{cases}}
$$

$$
\textcolor{red}{\begin{cases} x + y = -3 \\ xy = -10 \end{cases}}
$$

Considero l'equazione associata:

$$
\textcolor{blue}{z^2 - 3z - 10 = 0}
$$

Risolvo ed ottengo (calcoli):

$$
\textcolor{blue}{z_1 = -2} \quad \textcolor{blue}{z_2 = +5}
$$

Ho quindi le soluzioni:

$$
\textcolor{blue}{\begin{cases} x_1 = -2 \\ y_1 = 5 \end{cases}} \quad \textcolor{blue}{\begin{cases} x_2 = 5 \\ y_2 = -2 \end{cases}}
$$

***

Risolvo il secondo:

$$
\textcolor{red}{\begin{cases} x + y = 5 \\ 2(x + y) - xy = 4 \end{cases}}
$$

Sostituisco nella seconda $5$ al posto di $(x + y)$:

$$
\textcolor{red}{\begin{cases} x + y = 5 \\ 2(5) - xy = 4 \end{cases}}
$$

$$
\textcolor{red}{\begin{cases} x + y = 5 \\ -xy = 4 - 10 \end{cases}}
$$

$$
\textcolor{red}{\begin{cases} x + y = 5 \\ xy = 6 \end{cases}}
$$

Considero l'equazione associata:

$$
\textcolor{blue}{z^2 - 5z + 6 = 0}
$$

Risolvo ed ottengo (calcoli):

$$
\textcolor{blue}{z_1 = 2}
$$
$$
\textcolor{blue}{z_2 = 3}
$$

Ho quindi le soluzioni:

$$
\textcolor{blue}{\begin{cases} x_1 = 2 \\ y_1 = 3 \end{cases}} \quad \textcolor{blue}{\begin{cases} x_2 = 3 \\ y_2 = 2 \end{cases}}
$$

***

Raccogliendo ho le 4 soluzioni:

$$
\textcolor{blue}{\begin{cases} x_1 = -2 \\ y_1 = 5 \end{cases}} \quad \textcolor{blue}{\begin{cases} x_2 = 5 \\ y_2 = -2 \end{cases}} \quad \textcolor{blue}{\begin{cases} x_3 = 2 \\ y_3 = 3 \end{cases}} \quad \textcolor{blue}{\begin{cases} x_4 = 3 \\ y_4 = 2 \end{cases}}
$$