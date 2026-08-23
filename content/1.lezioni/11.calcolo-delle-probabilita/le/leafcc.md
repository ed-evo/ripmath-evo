# Esercizio sulla distribuzione di Poisson

La percentuale di pezzi difettosi prodotti da una macchina è, in media, dello $$0,2\%$$, siccome la ditta esporta tali pezzi in confezioni di $$1000$$ calcolare quanti pezzi in più dovranno essere messi in ogni confezione perché la probabilità di avere in una confezione meno di $$1000$$ pezzi efficienti sia inferiore allo $$0,01\%$$

Cioè la macchina in media produce $$2$$ pezzi difettosi ogni mille, quindi la probabilità che un pezzo sia difettoso è $$p = 0,002$$
il numero di pezzi per confezione è $$n = 1000$$

Essendo $$n = 1000$$ molto grande e $$p = 0,002$$ molto piccola possiamo approssimare bene utilizzando la distribuzione di Poisson. Costruiamo la variabile aleatoria di Poisson per $$0, 1, 2, 3, 4, 5, \dots$$ pezzi e vediamo a quale numero corrisponde una probabilità inferiore a $$0,01$$

$$
\textcolor{red}{P_x = \frac{\mu^x}{x!} e^{-\mu}}
$$

essendo $$\mu = p \cdot n = 1000 \cdot 0,002 = 2$$

| Evento | $$x = 0$$ | $$x = 1$$ | $$x = 2$$ | $$x = 3$$ | $$x = 4$$ | $$x = 5$$ | $$x = 6$$ | $$x = 7$$ | $$x = 8$$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Probabilità (formula) | $$\frac{\mu^0}{0!} e^{-\mu}$$ | $$\frac{\mu^1}{1!} e^{-\mu}$$ | $$\frac{\mu^2}{2!} e^{-\mu}$$ | $$\frac{\mu^3}{3!} e^{-\mu}$$ | $$\frac{\mu^4}{4!} e^{-\mu}$$ | $$\frac{\mu^5}{5!} e^{-\mu}$$ | $$\frac{\mu^6}{6!} e^{-\mu}$$ | $$\frac{\mu^7}{7!} e^{-\mu}$$ | $$\frac{\mu^8}{8!} e^{-\mu}$$ |
| Probabilità (calcolo) | $$\frac{2^0}{0!} e^{-2}$$ | $$\frac{2^1}{1!} e^{-2}$$ | $$\frac{2^2}{2!} e^{-2}$$ | $$\frac{2^3}{3!} e^{-2}$$ | $$\frac{2^4}{4!} e^{-2}$$ | $$\frac{2^5}{5!} e^{-2}$$ | $$\frac{2^6}{6!} e^{-2}$$ | $$\frac{2^7}{7!} e^{-2}$$ | $$\frac{2^8}{8!} e^{-2}$$ |
| **Probabilità pezzi difettosi** | $$0,0498$$ | $$0,1353$$ | $$0,2707$$ | $$0,2707$$ | $$0,3609$$ | $$0,0902$$ | $$0,0241$$ | $$0,0021$$ | $$0,00005$$ |

Cioè abbiamo una probabilità:
- del $$4,98\%$$ di non avere pezzi difettosi
- del $$13,53\%$$ di avere un solo pezzo difettoso
- del $$27,07\%$$ di avere esattamente $$2$$ pezzi difettosi
- del $$27,07\%$$ di avere esattamente $$3$$ pezzi difettosi
- del $$36,09\%$$ di avere esattamente $$4$$ pezzi difettosi
- del $$9,02\%$$ di avere esattamente $$5$$ pezzi difettosi
- del $$2,41\%$$ di avere esattamente $$6$$ pezzi difettosi
- del $$0,21\%$$ di avere esattamente $$7$$ pezzi difettosi
- del $$0,005\%$$ di avere esattamente $$8$$ pezzi difettosi; questo valore è inferiore alla probabilità cercata

> Da notare che la somma di tutte le probabilità si avvicina al valore $$1$$

> **Osservando la tabella possiamo dire intuitivamente che in ogni confezione di $$1000$$ pezzi vanno aggiunti $$8$$ pezzi per essere ragionevolmente sicuri che la confezione contenga $$1000$$ pezzi efficienti**

Continuando il calcolo, la probabilità che $$9$$ pezzi siano rovinati contemporaneamente è (riapplico la formula):

$$
p = 0,000002
$$

cioè è la probabilità che ogni $$500$$ confezioni da $$1000$$ pezzi ve ne sia una con $$9$$ pezzi difettosi