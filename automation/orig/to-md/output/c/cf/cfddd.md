# [Derivata di una funzione di funzione]{.text-red}

Questa è forse l'operazione più importante per saper calcolare esattamente la derivata: per fare la derivata di una funzione di funzione prima faccio la derivata della funzione esterna senza toccare quella interna e poi moltiplico per la derivata di quella interna.

In simboli, se ho

$$
\textcolor{red}{y = f(g(x))}
$$

allora

$$
\textcolor{red}{y' = f'(g(x)) \cdot g'(x)}
$$

Vediamo di capire meglio con un esempio

$$
\textcolor{red}{y = \sin(\log x)}
$$

prima devo fare la derivata della funzione $\textcolor{red}{\sin}$ che è $\textcolor{red}{\cos}$, quindi la prima parte della derivata di $\textcolor{red}{\sin(\log x)}$ sarà $\textcolor{red}{\cos(\log x)}$, come se al posto della $\textcolor{red}{x}$ avessimo $\textcolor{red}{\log x}$.
Ora devo fare la derivata di $\textcolor{red}{\log x}$ che è $\textcolor{red}{1/x}$, quindi avrò

$$
\textcolor{red}{y' = \cos(\log x) \cdot \frac{1}{x}}
$$

> Per renderla più semplice pensate a una cipolla: la cipolla è fatta a strati ed io per sbucciarla devo togliere il primo strato, poi il secondo, poi il terzo ...
> Anche la funzione di funzione è fatta a strati, prima devo derivare la prima funzione lasciando inalterate le altre, poi la seconda .... fino all'ultimo quando mi resta la $\textcolor{red}{x}$

vediamo un altro esempio;

$$
\textcolor{red}{y = [\log(\sin\sqrt{x})]^5}
$$

Qui ho la funzione elevamento a potenza $5$ che racchiude il logaritmo che racchiude il seno che racchiude la radice che racchiude $\textcolor{red}{x}$.
Prima devo fare la derivata della potenza $5$: se fosse $\textcolor{red}{x^5}$ la derivata sarebbe $\textcolor{red}{5x^4}$, in questo caso poiché al posto di $\textcolor{red}{x}$ ho $\textcolor{red}{\log(\sin\sqrt{x})}$ la prima parte della derivata sarà

$$
\textcolor{red}{5[\log(\sin\sqrt{x})]^4}
$$

Passo ora alla seconda funzione che è il logaritmo: se fosse $\textcolor{red}{\log x}$ la derivata sarebbe $\textcolor{red}{1/x}$, poiché al posto di $\textcolor{red}{x}$ ho $\textcolor{red}{\sin\sqrt{x}}$, la seconda parte della derivata sarà:

$$
\textcolor{red}{\frac{1}{\sin\sqrt{x}}}
$$

Passo ora alla terza funzione che è il seno: se fosse $\textcolor{red}{\sin x}$ la derivata sarebbe $\textcolor{red}{\cos x}$, poiché al posto di $\textcolor{red}{x}$ ho $\textcolor{red}{\sqrt{x}}$, la terza parte della derivata sarà:

$$
\textcolor{red}{\cos\sqrt{x}}
$$

Passo ora alla quarta funzione che è la radice: la derivata di $\textcolor{red}{\sqrt{x}}$ è $\textcolor{red}{\frac{1}{2\sqrt{x}}}$ e sono arrivato alla $\textcolor{red}{x}$ quindi questa è l'ultima parte.

Raccogliendo:

$$
\textcolor{red}{y' = 5[\log(\sin\sqrt{x})]^4 \cdot \frac{1}{\sin\sqrt{x}} \cdot \cos\sqrt{x} \cdot \frac{1}{2\sqrt{x}}}
$$