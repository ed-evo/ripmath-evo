# Riduzione di più crediti ad una scadenza intermedia

In questo caso ci riferiamo ad una scadenza compresa fra le varie scadenze delle somme considerate
Dobbiamo determinare l'importo: vediamo come procedere su un esempio

Devo ricevere da due debitori le somme di $$5000 \text{ €}$$ fra $$3 \text{ anni}$$ e $$6000 \text{ €}$$ fra $$8 \text{ anni}$$
Mi accordo con una banca per cederle i crediti concordando di ricevere una somma fra $$5 \text{ anni}$$ al tasso del $$1,25\%$$
Quanto riceverò dalla banca fra $$5 \text{ anni}$$?

Dati:
**$$credito_1 = 5000$$ $$tempo_1 = 3 \text{ anni}$$**
**$$credito_2 = 6000$$ $$tempo_2 = 8 \text{ anni}$$**
**$$tasso \text{ di sconto} = 1,25\% = 0,0125$$ $$tempo_3 = 5 \text{ anni}$$**

trovare il valore a $$5 \text{ anni}$$, chiamiamolo **$$V_5$$**

Traccio la retta dei tempi

devo portare avanti nel tempo la somma di $$5000,00 \text{ €}$$ per $$2 \text{ anni}$$ e portare indietro nel tempo la somma di $$6000,00 \text{ €}$$ per $$3 \text{ anni}$$ al tasso $$i = 0,0125$$, quindi

**$$
V_3 = 5000,00 \cdot u^2 + 6000,00 \cdot v^3 = 5000,00 \cdot 1,0125^2 + 6000,00 \cdot 1,0125^{-3}
$$**

Leggo sulle tavole finanziarie i valori per **$$u^n$$** e **$$v^n$$**
**$$1,0125^2 = 1,02515625$$**
**$$1,0125^{-3} = 0,96341833$$**

**$$
= 5000,00 \cdot 1,02515625 + 6000,00 \cdot 0,96341833 = 10906,29123
$$**

approssimo a **$$10906,30 \text{ €}$$**

Quindi la banca in cambio dei miei crediti mi pagherà fra $$5 \text{ anni}$$ l'importo di $$10906,30 \text{ €}$$

> Ho eseguito l'esercizio con due crediti, avrei potuto farlo con crediti e debiti assieme ed anche con $$3, 4, \dots$$ crediti/debiti; basterà semplicemente sommare più termini.