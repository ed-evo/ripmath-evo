# integrazione per scomposizione

Sono integrali in cui devi aggiungere e, contemporaneamente, togliere qualcosa al numeratore per renderlo semplificabile con il denominatore: se in questo modo ottieni integrali risolvibili sei a posto, altrimenti provi un altro metodo.

Vediamo un semplice esempio:

$$
\int \frac{\textcolor{red}{x}}{\textcolor{red}{x-1}} dx =
$$

aggiungo al numeratore $-1$ per renderlo uguale al denominatore ed anche $+1$ per non variare di valore l'espressione:

$$
= \int \frac{\textcolor{red}{x-1+1}}{\textcolor{red}{x-1}} dx =
$$

Ora "spezzo" il numeratore in modo da avere due frazioni con lo stesso denominatore:

$$
= \int \frac{\textcolor{red}{x-1}}{\textcolor{red}{x-1}} dx + \int \frac{\textcolor{red}{1}}{\textcolor{red}{x-1}} dx =
$$

Posso semplificare:

$$
= \int \textcolor{red}{1} dx + \int \frac{\textcolor{red}{1}}{\textcolor{red}{x-1}} dx =
$$

e questi sono due integrali immediati:

$$
= \textcolor{red}{x + \log|x-1| + c}
$$