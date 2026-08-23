# esercizio

Sviluppare in serie la funzione

$$
\textcolor{red}{y = \frac{1}{1 + x^2}}
$$

Sopra aggiungo e tolgo $$x^2$$

$$
\textcolor{red}{y = \frac{1 + x^2 - x^2}{1 + x^2}}
$$

Ora spezzo la frazione

$$
\textcolor{red}{y = \frac{1 + x^2}{1 + x^2} - \frac{x^2}{1 + x^2}}
$$

Semplificando ottengo

$$
\textcolor{red}{y = 1 - \frac{x^2}{1 + x^2}}
$$

Ora aggiungo e tolgo $$x^4$$ al numeratore della frazione

$$
\textcolor{red}{y = 1 - \frac{x^2 + x^4 - x^4}{1 + x^2}}
$$

Spezzo la frazione

> **Nota:** Attento al segno della seconda frazione: siccome la frazione è negativa devo cambiare di segno l'ultimo termine.

$$
\textcolor{red}{y = 1 - \frac{x^2 + x^4}{1 + x^2} + \frac{x^4}{1 + x^2}}
$$

Metto in evidenza $$x^2$$ nella prima frazione

$$
\textcolor{red}{y = 1 - \frac{x^2(1 + x^2)}{1 + x^2} + \frac{x^4}{1 + x^2}}
$$

Semplifico ed ottengo

$$
\textcolor{red}{y = 1 - x^2 + \frac{x^4}{1 + x^2}}
$$

Ora posso aggiungere e togliere $$x^6$$ al numeratore della frazione

$$
\textcolor{red}{y = 1 - x^2 + \frac{x^4 + x^6 - x^6}{1 + x^2}}
$$

Spezzo la frazione

$$
\textcolor{red}{y = 1 - x^2 + \frac{x^4 + x^6}{1 + x^2} - \frac{x^6}{1 + x^2}}
$$

Metto in evidenza $$x^4$$ nella prima frazione

$$
\textcolor{red}{y = 1 - x^2 + \frac{x^4(1 + x^2)}{1 + x^2} - \frac{x^6}{1 + x^2}}
$$

Semplifico ed ottengo

$$
\textcolor{red}{y = 1 - x^2 + x^4 - \frac{x^6}{1 + x^2}}
$$

Ora posso togliere e aggiungere $$x^8$$ al numeratore della frazione...

Posso continuare all'infinito ed otterrò per la mia funzione lo sviluppo

$$
\textcolor{red}{y = 1 - x^2 + x^4 - x^6 + x^8 - x^{10} + \dots}
$$