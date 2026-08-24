# Esercizi sulla derivata di un quoziente di funzioni

Calcolare la derivata della funzione
$$ \textcolor{blue}{y = \tan x} $$
cioè
$$ \textcolor{red}{y = \frac{\sin x}{\cos x}} $$

La derivata di $$\textcolor{red}{\sin x}$$ è $$\textcolor{red}{\cos x}$$
La derivata di $$\textcolor{red}{\cos x}$$ è $$\textcolor{red}{-\sin x}$$
quindi
$$ \textcolor{red}{y' = \frac{\cos x \cdot \cos x - \sin x \cdot (-\sin x)}{\cos^2 x}} $$

cioè
$$ \textcolor{red}{y' = \frac{\cos^2 x + \sin^2 x}{\cos^2 x}} $$

posso esprimere il risultato in due modi diversi:

a. ricordando che $$\textcolor{red}{\cos^2 x + \sin^2 x = 1}$$ ho
$$ \textcolor{blue}{y' = \frac{1}{\cos^2 x}} $$

b. Dividendo ogni termine per $$\textcolor{red}{\cos^2 x}$$ ho
$$ \textcolor{red}{y' = \frac{\cos^2 x}{\cos^2 x} + \frac{\sin^2 x}{\cos^2 x}} $$

e quindi
$$ \textcolor{blue}{y' = 1 + \tan^2 x} $$

> **Nota:** Notiamo che abbiamo dimostrato come ottenere una derivata presente nella tabella come derivata immediata: è piuttosto frequente richiedere come esercizio di dimostrare anche cose che si dovrebbero sapere a memoria.

***

Calcolare la derivata della funzione
$$ \textcolor{blue}{y = \frac{x^2 + 2x + 5}{x^2 - 4}} $$

La derivata di $$\textcolor{red}{x^2 + 2x + 5}$$ è $$\textcolor{red}{2x + 2}$$
La derivata di $$\textcolor{red}{x^2 - 4}$$ è $$\textcolor{red}{2x}$$
quindi
$$ \textcolor{red}{y' = \frac{(2x + 2) \cdot (x^2 - 4) - (x^2 + 2x + 5) \cdot 2x}{(x^2 - 4)^2}} $$

Come derivata avremmo terminato ma purtroppo bisogna semplificare l'espressione e qui è possibile rendere l'esercizio complicato quanto vogliamo; in questo caso i calcoli sono ancora abbastanza semplici, ma, in genere, per fare bene gli esercizi occorre avere una buona conoscenza dell'algebra.

Facciamo le moltiplicazioni:
$$ \textcolor{red}{y' = \frac{2x^3 - 8x + 2x^2 - 8 - 2x^3 - 4x^2 - 10x}{(x^2 - 4)^2}} $$

Ora sommo i termini simili:
$$ \textcolor{red}{y' = \frac{-2x^2 - 18x - 8}{(x^2 - 4)^2}} $$

Metto in evidenza $$\textcolor{red}{-2}$$:
$$ \textcolor{blue}{y' = \frac{-2(x^2 + 9x + 4)}{(x^2 - 4)^2}} $$

Poiché numeratore e denominatore non hanno fattori comuni questo è il risultato finale.

***

Naturalmente è possibile mescolare le regole come nel seguente esempio:
$$ \textcolor{blue}{y = \frac{x^2 \sin x}{\log x}} $$

$$\textcolor{red}{x^2 \sin x}$$ è un prodotto quindi la sua derivata è $$\textcolor{red}{2x \cdot \sin x + x^2 \cdot \cos x}$$
La derivata di $$\textcolor{red}{\log}$$ è $$\textcolor{red}{1/x}$$
quindi
$$ \textcolor{red}{y' = \frac{(2x \cdot \sin x + x^2 \cdot \cos x) \cdot \log x - x^2 \cdot \sin x \cdot 1/x}{\log^2 x}} $$

Eseguo le moltiplicazioni e ove possibile semplifico:
$$ \textcolor{red}{y' = \frac{2x \cdot \sin x \cdot \log x + x^2 \cdot \cos x \cdot \log x - x \cdot \sin x}{\log^2 x}} $$

posso ancora mettere in evidenza la $$\textcolor{red}{x}$$ ed ottengo il risultato:
$$ \textcolor{blue}{y' = \frac{x(2 \sin x \cdot \log x + x \cdot \cos x \cdot \log x - \sin x)}{\log^2 x}} $$