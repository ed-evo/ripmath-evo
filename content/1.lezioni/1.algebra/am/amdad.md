Risolvere la seguente disequazione esponenziale

$$
\textcolor{red}{5^x - 4 \cdot 3^{x+1} \le 2 \cdot 3^x - 5^{x+1}}
$$

Ricordando che $$3^{x+1} = 3 \cdot 3^x$$ cerco di avere le potenze allo stesso esponente

$$
\textcolor{blue}{5^x - 4 \cdot 3 \cdot 3^x \le 2 \cdot 3^x - 5 \cdot 5^x}
$$

$$
\textcolor{blue}{5^x - 12 \cdot 3^x \le 2 \cdot 3^x - 5 \cdot 5^x}
$$

separo le potenze di stessa base

$$
\textcolor{blue}{5^x + 5 \cdot 5^x \le 2 \cdot 3^x + 12 \cdot 3^x}
$$

sommo i termini simili

$$
\textcolor{blue}{6 \cdot 5^x \le 14 \cdot 3^x}
$$

siccome ho due basi diverse applico il logaritmo a entrambi i membri

$$
\textcolor{blue}{\log 6 \cdot 5^x \le \log 14 \cdot 3^x}
$$

che, per le proprietà dei logaritmi diventa:

$$
\textcolor{blue}{\log 6 + \log 5^x \le \log 14 + \log 3^x}
$$

$$
\textcolor{blue}{\log 6 + x \log 5 \le \log 14 + x \log 3}
$$

ricavo la $$x$$

$$
\textcolor{blue}{x \log 5 - x \log 3 \le \log 14 - \log 6}
$$

$$
\textcolor{blue}{x (\log 5 - \log 3) \le \log 14 - \log 6}
$$

$$
\textcolor{red}{x \le \frac{\log 14 - \log 6}{\log 5 - \log 3}}
$$