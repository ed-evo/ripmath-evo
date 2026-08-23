# [Metodo di Cramer]{.text-red}

---

Cerchiamo di capire come si arriva al metodo di Cramer

---

Dobbiamo partendo dal sistema

$$
\begin{cases} 
\textcolor{red}{ax + by = c} \\ 
\textcolor{red}{dx + ey = f} 
\end{cases}
$$

arrivare alla soluzione

$$
\begin{cases} 
\textcolor{red}{x = \frac{ce - bf}{ae - bd}} \\ 
\textcolor{red}{y = \frac{af - cd}{ae - bd}} 
\end{cases}
$$

Notiamo che nelle soluzioni compaiono solo i coefficienti numerici del sistema; li scrivo in ordine come sono:

$$
\textcolor{red}{\begin{vmatrix} a & b & c \\ d & e & f \end{vmatrix}}
$$

Ora al denominatore sia della $$x$$ che della $$y$$ compare il valore $$\textcolor{red}{ae - bd}$$ formato dai valori delle prime due colonne: allora estraggo le prime due colonne

$$
\textcolor{red}{\begin{vmatrix} a & b \\ d & e \end{vmatrix}}
$$

perché questo diventi uguale ad $$\textcolor{red}{ae - bd}$$ dovrò definirlo come prodotto fra il primo e il quarto termine meno il secondo per il terzo:

$$
\begin{vmatrix} \textcolor{red}{a} & \textcolor{red}{b} \\ \textcolor{red}{d} & \textcolor{red}{e} \end{vmatrix} \begin{matrix} \text{a primo termine} & \text{b secondo termine} \\ \text{d terzo termine} & \text{e quarto termine} \end{matrix}
$$

$$
\textcolor{red}{\begin{vmatrix} a & b \\ d & e \end{vmatrix} = a \cdot e - b \cdot d = ae - bd}
$$

Ora passiamo a controllare la $$x$$: al numeratore il risultato vale $$\textcolor{red}{ce - bf}$$, quindi coinvolge la seconda e la terza colonna

$$
\textcolor{red}{\begin{vmatrix} b & c \\ e & f \end{vmatrix}}
$$

Però se calcoliamo come prima ci viene il segno sbagliato:

$$
\textcolor{blue}{\begin{vmatrix} b & c \\ e & f \end{vmatrix} = b \cdot f - c \cdot e = bf - ce \text{ (invece di } ce - bf)}
$$

Ma per avere il segno giusto basta scambiare le colonne

$$
\textcolor{red}{\begin{vmatrix} c & b \\ f & e \end{vmatrix} = c \cdot e - b \cdot f = ce - bf}
$$

Allora per avere il segno giusto diciamo che prendiamo il determinante delle prime due colonne e eliminiamo la colonna delle $$x$$ ed al suo posto mettiamo la colonna dei termini noti.

---

> **Nota:** Nel nostro caso basterebbe dire che cambio segno, però siccome questo metodo sarà usato anche con tre, quattro... $$n$$ equazioni quello che ho scritto andrà bene in generale.

---

E il valore della $$x$$ sarà dato da

$$
\textcolor{red}{x = \frac{\begin{vmatrix} c & b \\ f & e \end{vmatrix}}{\begin{vmatrix} a & b \\ d & e \end{vmatrix}} = \frac{c \cdot e - b \cdot f}{a \cdot e - b \cdot d} = \frac{ce - bf}{ae - bd}}
$$

Lo stesso ragionamento varrà per la $$y$$: al denominatore metterò le prime due colonne ed al numeratore eliminerò la colonna delle $$y$$ ed al suo posto metterò la colonna dei termini noti

$$
\textcolor{red}{y = \frac{\begin{vmatrix} a & c \\ d & f \end{vmatrix}}{\begin{vmatrix} a & b \\ d & e \end{vmatrix}} = \frac{a \cdot f - c \cdot d}{a \cdot e - b \cdot d} = \frac{af - cd}{ae - bd}}
$$