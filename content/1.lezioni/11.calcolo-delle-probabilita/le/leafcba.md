# Dimostrazione

Vediamo come si ricava la formula della distribuzione di Poisson

> Ti avviso che, siccome dovremo fare delle approssimazioni, il valore trovato non è la probabilità vera, ma considerando probabilità piccole e numero di casi molto elevato, la approssimerà bene

Consideriamo un qualunque problema del tipo prove ripetute cioè in distribuzione binomiale; supponiamo che $$\textcolor{red}{n}$$, numero dei casi possibili, sia molto grande; poniamo $$\textcolor{red}{\mu = p \cdot n}$$

Cominciamo a calcolare i vari valori della variabile aleatoria: ricordando che il valore generico vale

[Probabilità = $$\textcolor{red}{\binom{n}{k} \cdot p^k \cdot q^{n-k}}$${.text-red}]

per $$\textcolor{red}{k = 0, 1, 2, \dots}$$

- per $$\textcolor{red}{k=0}$$ avremo

$$
\textcolor{red}{P(0) = \binom{n}{0} \cdot p^0 \cdot q^n = q^n = (1 - p)^n = (1 - \frac{\mu}{n})^n}
$$

Nell'ultimo passaggio ho moltiplicato $$\textcolor{red}{p}$$ per $$\textcolor{red}{n/n}$$ in modo da avere $$\textcolor{red}{\mu}$$ al numeratore e quindi ho $$\textcolor{red}{n}$$ al denominatore.
Siccome il numero $$\textcolor{red}{n}$$ deve essere molto grande calcolo il limite dell'espressione per $$\textcolor{red}{n \to \infty}$$

$$
\textcolor{red}{\lim_{n \to \infty} (1 - \frac{\mu}{n})^n = \lim_{n \to \infty} \left[ \left( 1 + \frac{1}{n/(-\mu)} \right)^{-n/\mu} \right]^{-\mu}}
$$

Dentro parentesi tonda ho portato $$\textcolor{red}{-\mu}$$ al denominatore ([regola della divisione fra due frazioni](leafcbaa.html)) e diviso la potenza $$\textcolor{red}{n}$$ nelle due potenze $$\textcolor{red}{-n/\mu}$$ e $$\textcolor{red}{-\mu}$$: posso farlo perché rimoltiplicando mi torna $$\textcolor{red}{n}$$

Ora approssimiamo considerando $$\textcolor{red}{\mu}$$ numero dato perché prodotto di un numero molto grande per un numero molto piccolo, in tal caso posso portare il limite dentro parentesi quadra

> Veramente matematicamente non si potrebbe, ma siccome noi cerchiamo un valore approssimato tale approssimazione è possibile e sarà sempre più vicina al valore reale quando $$\textcolor{red}{n}$$ è abbastanza grande e $$\textcolor{red}{p}$$ abbastanza piccolo

Quello che ottengo è un [limite notevole](../../c/cd/cdfb.html)

$$
\textcolor{red}{= \left[ \lim_{n \to \infty} \left( 1 + \frac{1}{n/(-\mu)} \right)^{-n/\mu} \right]^{-\mu} = e^{-\mu}}
$$

- Passiamo ora a calcolare il termine generico $$\textcolor{red}{P(x)}$$

$$
\textcolor{red}{P(x) = \binom{n}{x} \cdot p^x \cdot q^{n-x} = \frac{n(n-1)(n-2)\dots(n-x+1)}{x!} \cdot p^x \cdot q^{n-x}}
$$

adesso moltiplico sia al numeratore che al denominatore per $$\textcolor{red}{n^{x-1}}$$ in modo che al numeratore moltiplicando per $$\textcolor{red}{n^{x-1}}$$ ottengo $$\textcolor{red}{n^x}$$ come primo fattore del prodotto

$$
\textcolor{red}{= \frac{n(n-1)(n-2)\dots(n-x+1)}{x!} \cdot \frac{n^{x-1}}{n^{x-1}} \cdot p^x \cdot q^{n-x} = \frac{n^x}{x!} \cdot \frac{(n-1)(n-2)\dots(n-x+1)}{n^{x-1}} \cdot p^x \cdot q^{n-x}}
$$

Ora, avendo sopra il segno di frazione $$\textcolor{red}{x-1}$$ fattori li suddivido mettendo a ciascuno al denominatore il termine $$\textcolor{red}{n}$$ (se rimoltiplico al denominatore mi torna $$\textcolor{red}{n^{x-1}}$$). Inoltre raccolgo assieme $$\textcolor{red}{n^x}$$ e $$\textcolor{red}{p^x}$$ scrivendo $$\textcolor{red}{(np)^x}$$; infine al posto di $$\textcolor{red}{q^{n-x}}$$ metto $$\textcolor{red}{(1-p)^{n-x}}$$.

$$
\textcolor{red}{= \frac{(np)^x}{x!} \cdot \frac{n-1}{n} \cdot \frac{n-2}{n} \cdot \frac{n-3}{n} \dots \frac{n-x+1}{n} \cdot (1-p)^{n-x}}
$$

Poniamo ora $$\textcolor{red}{np = \mu}$$ abbiamo
$$\textcolor{red}{1 - p = 1 - p \cdot n/n = 1 - \mu/n}$$

$$
\textcolor{red}{= \frac{\mu^x}{x!} \cdot \frac{n-1}{n} \cdot \frac{n-2}{n} \cdot \frac{n-3}{n} \dots \frac{n-x+1}{n} \cdot (1-\mu/n)^{n-x}}
$$

spezzo l'ultima potenza nelle sue componenti e scrivo le frazioni come somma di termini

$$
\textcolor{red}{= \frac{\mu^x}{x!} \cdot (1 - \frac{1}{n}) \cdot (1 - \frac{2}{n}) \cdot (1 - \frac{3}{n}) \dots (1 - \frac{x}{n}) \cdot (1 - \frac{\mu}{n})^n \cdot (1 - \frac{\mu}{n})^{-x}}
$$

e siccome il numero $$\textcolor{red}{n}$$ deve essere molto grande calcolo il limite per $$\textcolor{red}{n \to \infty}$$

$$
\textcolor{red}{\lim_{n \to \infty} \left[ \frac{\mu^x}{x!} \cdot (1 - \frac{1}{n}) \cdot (1 - \frac{2}{n}) \cdot (1 - \frac{3}{n}) \dots (1 - \frac{x}{n}) \cdot (1 - \frac{\mu}{n})^n \cdot (1 - \frac{\mu}{n})^{-x} \right]}
$$

Come nel calcolo precedente consideriamo il primo fattore $$\textcolor{red}{\mu^x/x!}$$ come una costante essendo $$\textcolor{red}{\mu}$$ composto da $$\textcolor{red}{n}$$ molto grande e $$\textcolor{red}{p}$$ molto piccola; tutti gli altri fattori al limite valgono $$\textcolor{red}{1}$$ eccetto il penultimo che è il solito [limite notevole](../../c/cd/cdfb.html) e abbiamo già calcolato in cima alla pagina che vale $$\textcolor{red}{e^{-\mu}}$$, quindi otteniamo

$$
\textcolor{red}{P_x = \frac{\mu^x}{x!} e^{-\mu}}
$$

Come vedi non è una dimostrazione facile e ci dà solamente un valore approssimato della probabilità reale, però, tale valore è molto comodo da utilizzare.