# Svolgimento

$$
\textcolor{red}{y = 7xe^x \log x}
$$

il $$7$$ è una costante, poi abbiamo il prodotto fra le tre funzioni $$\textcolor{red}{x}$$, $$\textcolor{red}{e^x}$$ e $$\textcolor{red}{\log x}$$, applico la [regola](cfddb.html)

$$
\textcolor{red}{y' = f' \cdot g \cdot h + f \cdot g' \cdot h + f \cdot g \cdot h'}
$$

- $$\textcolor{red}{7}$$ è una costante e la estraggo dalla derivata (la metto davanti ad una parentesi che contiene la derivata)
- la derivata di $$\textcolor{red}{x}$$ è $$\textcolor{red}{1}$$
- la derivata di $$\textcolor{red}{e^x}$$ è $$\textcolor{red}{e^x}$$
- la derivata di $$\textcolor{red}{\log x}$$ è $$\textcolor{red}{1/x}$$

Quindi

$$
\textcolor{red}{y' = 7 \cdot (1 \cdot e^x \cdot \log x + x \cdot e^x \cdot \log x + x \cdot e^x \cdot 1/x)}
$$

Nel terzo termine dentro parentesi semplifico $$x$$ con $$1/x$$

$$
\textcolor{red}{y' = 7 \cdot (1 \cdot e^x \cdot \log x + x \cdot e^x \cdot \log x + e^x)}
$$

raccogliendo assieme al $$7$$ anche $$e^x$$ ed ordinando

$$
\textcolor{red}{y' = 7e^x (x \log x + \log x + 1)}
$$