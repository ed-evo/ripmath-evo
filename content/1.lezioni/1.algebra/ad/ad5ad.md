# Esercizio

$$ \textcolor{red}{(x^5 - 32) : (x - 2) =} $$

Prima di impostare la divisione dobbiamo rendere i polinomi ordinati; possiamo considerarlo come:

$$ \textcolor{red}{(x^5 + 0x^4 + 0x^3 + 0x^2 + 0x - 32) : (x - 2) =} $$

Ora impostiamo la divisione. È meno difficile di quello che sembra perché quando devo fare la somma ed un termine vale zero posso fare subito il calcolo: siccome lo zero non ha segno, nella divisione invece di $$\textcolor{red}{0x^n}$$ metto semplicemente //.

$$
\textcolor{red}{
\begin{array}{c|ccccc|c}
 & 1 & // & // & // & // & -32 & x - 2 \\
 \hline
 & & 2 & 4 & 8 & 16 & 32 & x^4 + 2x^3 + 4x^2 + 8x + 16 \\
 \hline
 & 1 & 2 & 4 & 8 & 16 & 0 & 
\end{array}
}
$$

Quindi posso scrivere:

$$ \textcolor{blue}{(x^5 - 32) : (x - 2) = (x^4 + 2x^3 + 4x^2 + 8x + 16)} $$

Puoi controllare se hai fatto giusto facendone la prova:

$$ \textcolor{blue}{(x - 2) \cdot (x^4 + 2x^3 + 4x^2 + 8x + 16) =} $$

e, se hai fatto giusto e non fai nessun errore di calcolo, troverai come risultato il polinomio di partenza.