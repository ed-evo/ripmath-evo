# [esercizio]{.text-red}

Eseguire la seguente differenza fra numeri binari:
$$10000000000 - 1011111111 =$$

Prima li metto in colonna (si parte sempre da destra):

$$
\begin{array}{rcccccccccccc}
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & \textcolor{red}{-} \\
& 1 & 0 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
\hline
\end{array}
$$

Adesso sottraggo partendo da destra: sopra, in $\textcolor{green}{\text{verde}}$ e carattere più piccolo ti scrivo i prestiti:

$$
\begin{array}{rcccccccccccc}
& & \textcolor{green}{\rightarrow 1} & \textcolor{green}{\rightarrow 1} & \textcolor{green}{\rightarrow 1} & \textcolor{green}{\rightarrow 1} & \textcolor{green}{\rightarrow 1} & \textcolor{green}{\rightarrow 1} & \textcolor{green}{\rightarrow 1} & \textcolor{green}{\rightarrow 1} & \textcolor{green}{\rightarrow 1} & \textcolor{green}{\rightarrow 1+1} \\
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & \textcolor{red}{-} \\
& 1 & 0 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
\hline
- & - & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1
\end{array}
$$

> **Note sui calcoli:**
> - Per la prima cifra a sinistra: questo è stato prestato e non resta niente: metto una linea.
> - Per la seconda cifra: questo va a prestito a sinistra e gli resta $$1$$ perché un $$1$$ l'ha prestato a destra, quindi $$1-1=0$$, metto una linea.
> - Per la terza cifra: questo va a prestito a sinistra e gli resta $$1$$ perché un $$1$$ l'ha prestato a destra, quindi $$1-0=1$$, scrivo $$1$$.
> - Per le cifre successive: questo va a prestito a sinistra e gli resta $$1$$ perché un $$1$$ l'ha prestato a destra, quindi $$1-1=0$$, scrivo $$0$$.
> - Per l'ultima cifra a destra: $$0-1$$ vado a prestito $$(1+1)-1=1$$, scrivo $$1$$.

Se vuoi seguire i calcoli ferma il mouse sulla cifra che ti interessa del risultato.