# Utilizzo di espressioni particolari (tipo formule di Waring)

Talvolta è possibile utilizzando espressioni particolari riuscire a semplificare le equazioni componenti del sistema e quindi risolverlo più facilmente.
Vediamone un esempio utilizzando le formule di Waring.

***

Esempio 1: risolvere il sistema:

$$
\textcolor{red}{\begin{cases} x^2 - y^2 + z^2 - t^2 = 10 \\ x + z = 6 \\ y + t = 4 \\ yt = 3 \end{cases}}
$$

scriviamola così:

$$
\textcolor{red}{\begin{cases} (x^2 + z^2) - (y^2 + t^2) = 10 \\ x + z = 6 \\ y + t = 4 \\ yt = 3 \end{cases}}
$$

ora applichiamo la prima formula di Waring:

$$
\textcolor{red}{\begin{cases} (x + z)^2 - 2xz - [(y + t)^2 - 2yt] = 10 \\ x + z = 6 \\ y + t = 4 \\ yt = 3 \end{cases}}
$$

$$
\textcolor{red}{\begin{cases} (x + z)^2 - 2xz - (y + t)^2 + 2yt = 10 \\ x + z = 6 \\ y + t = 4 \\ yt = 3 \end{cases}}
$$

Adesso sostituisco ed ottengo:

$$
\textcolor{red}{\begin{cases} 6^2 - 2xz - 4^2 + 2(3) = 10 \\ x + z = 6 \\ y + t = 4 \\ yt = 3 \end{cases}}
$$

cioè, eseguendo i calcoli:

$$
\textcolor{red}{\begin{cases} xz = 8 \\ x + z = 6 \\ y + t = 4 \\ yt = 3 \end{cases}}
$$

ora il sistema è scomponibile in due sistemi simmetrici.
risolvo il sistema fra le prime due equazioni; considero l'equazione associata:

$$
\textcolor{blue}{k^2 - 6k + 8 = 0}
$$

risolvo ed ottengo:

$$
\textcolor{blue}{k_1 = 2}
$$
$$
\textcolor{blue}{k_2 = 4}
$$

risolvo il sistema fra la terza e la quarta equazione; considero l'equazione associata:

$$
\textcolor{blue}{s^2 - 4s + 3 = 0}
$$

risolvo ed ottengo:

$$
\textcolor{blue}{k_1 = 1}
$$
$$
\textcolor{blue}{k_2 = 3}
$$

ho quindi le soluzioni:

$$
\textcolor{red}{\begin{cases} x_1 = 2 \\ z_1 = 4 \\ y_1 = 1 \\ t_1 = 3 \end{cases}} \quad \textcolor{red}{\begin{cases} x_2 = 2 \\ z_2 = 4 \\ y_2 = 3 \\ t_2 = 1 \end{cases}} \quad \textcolor{red}{\begin{cases} x_3 = 4 \\ z_3 = 2 \\ y_3 = 1 \\ t_3 = 3 \end{cases}} \quad \textcolor{red}{\begin{cases} x_4 = 4 \\ z_4 = 2 \\ y_4 = 3 \\ t_4 = 1 \end{cases}}
$$

o meglio, mettendo in ordine, ottengo le 4 quaterne di soluzioni:

$$
\textcolor{blue}{\begin{cases} x_1 = 2 \\ y_1 = 1 \\ z_1 = 4 \\ t_1 = 3 \end{cases}} \quad \textcolor{blue}{\begin{cases} x_2 = 2 \\ y_2 = 3 \\ z_2 = 4 \\ t_2 = 1 \end{cases}} \quad \textcolor{blue}{\begin{cases} x_3 = 4 \\ y_3 = 1 \\ z_3 = 2 \\ t_3 = 3 \end{cases}} \quad \textcolor{blue}{\begin{cases} x_4 = 4 \\ y_4 = 3 \\ z_4 = 2 \\ t_4 = 1 \end{cases}}
$$