# Esercizio sulle proprietà dei logaritmi

In questa prima stesura vediamo un esercizio che ci mostri come applicare le proprietà dei logaritmi; in seguito amplieremo il numero degli esercizi (fare un link qui)

Utilizzando le proprietà dei logaritmi calcolare il valore dell'espressione:

$$
\textcolor{blue}{\sqrt[3]{\frac{2\sqrt[4]{8} \cdot (0,125)^4}{0,5 \cdot \sqrt[4]{0,5} \cdot (0,25)^6}}}
$$

I numeri sono tutti potenze di $2$, quindi trasformiamoli in logaritmo in base $2$:

$$
\textcolor{blue}{\log_2 \sqrt[3]{\frac{2\sqrt[4]{8} \cdot (0,125)^4}{0,5 \cdot \sqrt[4]{0,5} \cdot (0,25)^6}}}
$$

La prima operazione che incontriamo con il logaritmo è la radice: applico la regola del logaritmo di una radice:

$$
\textcolor{blue}{\frac{1}{3} \log_2 \frac{2\sqrt[4]{8} \cdot (0,125)^4}{0,5 \cdot \sqrt[4]{0,5} \cdot (0,25)^6}}
$$

Ora ho la frazione: applico la regola del logaritmo di un quoziente:

$$
\textcolor{blue}{\frac{1}{3} \{ \log_2 [2\sqrt[4]{8} \cdot (0,125)^4] - \log_2 [0,5 \cdot \sqrt[4]{0,5} \cdot (0,25)^6] \}}
$$

Dentro le parentesi quadre ho dei prodotti: applico la regola del logaritmo di un prodotto:

$$
\textcolor{blue}{\frac{1}{3} [ \log_2 2 + \log_2 \sqrt[4]{8} + \log_2 (0,125)^4 - \log_2 0,5 - \log_2 \sqrt[4]{0,5} - \log_2 (0,25)^6 ]}
$$

> **Notiamo che**
> $$
> \textcolor{blue}{0,125 = \frac{1}{8} = 2^{-3}} \quad \textcolor{blue}{0,5 = \frac{1}{2} = 2^{-1}} \quad \textcolor{blue}{0,25 = \frac{1}{4} = 2^{-2}}
> $$

Otteniamo quindi:

$$
\textcolor{blue}{\frac{1}{3} [ \log_2 2 + \log_2 \sqrt[4]{8} + \log_2 \left(\frac{1}{8}\right)^4 - \log_2 \frac{1}{2} - \log_2 \sqrt[4]{\frac{1}{2}} - \log_2 \left(\frac{1}{4}\right)^6 ]}
$$

Ed applicando le regole sulle potenze e sulle radici:

$$
\textcolor{blue}{\frac{1}{3} [ \log_2 2 + \frac{1}{4} \log_2 8 + 4 \log_2 \frac{1}{8} - \log_2 \frac{1}{2} - \frac{1}{4} \log_2 \frac{1}{2} - 6 \log_2 \frac{1}{4} ]}
$$

Sostituiamo ai logaritmi i loro valori:

$$
\textcolor{blue}{\frac{1}{3} [ 1 + \frac{1}{4} \cdot 3 + 4 \cdot (-3) - (-1) - \frac{1}{4} \cdot (-1) - 6 \cdot (-2) ]}
$$

$$
\textcolor{blue}{\frac{1}{3} \left( 1 + \frac{3}{4} - 12 + 1 + \frac{1}{4} + 12 \right)}
$$

m.c.m. all'interno delle parentesi:

$$
\textcolor{blue}{\frac{1}{3} \cdot \frac{4 + 3 - 48 + 4 + 1 + 48}{4}}
$$

$$
\textcolor{blue}{\frac{1}{3} \cdot \frac{12}{4} = 1}
$$

Ora calcoliamo l'antilogaritmo, calcolando la potenza a base $2$ con esponente il numero trovato:

$$
\textcolor{blue}{2^1 = 2}
$$

Quindi:

$$
\textcolor{blue}{\sqrt[3]{\frac{2\sqrt[4]{8} \cdot (0,125)^4}{0,5 \cdot \sqrt[4]{0,5} \cdot (0,25)^6}} = 2}
$$