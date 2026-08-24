# [Ricerca dell'importo ad epoca fissa]{.text-red}

Ho un credito di $5000\text{ €}$ da riscuotere fra $2\text{ anni}$ ed un credito di $8000\text{ €}$ da riscuotere fra $8\text{ anni}$: cedo tali crediti ad una banca che mi anticipa $7000\text{ €}$ e mi pagherà il saldo fra $6\text{ anni}$ al tasso del $1,25\%$. Quanto riscuoterò dalla banca fra $6\text{ anni}$?

**Dati:**
- **credito1** = $5000\text{ €}$  **tempo1** = $2\text{ anni}$
- **credito2** = $8000\text{ €}$  **tempo2** = $8\text{ anni}$
- **anticipo** = $7000\text{ €}$  **tempo3** = $0\text{ anni}$
- **saldo** = $x$  **tempo4** = $6\text{ anni}$
- **tasso** $i = 1,25\% = 0,0125$

Troviamo l'importo del saldo $x$.

Riporto tutti i dati alla data odierna.
Traccio la retta dei tempi.

Imposto l'equazione:

$$
7000 + x \cdot v^{-6} = 5000 \cdot v^{-2} + 8000 \cdot v^{-8}
$$

$$
7000 + x \cdot 1,0125^{-6} = 5000 \cdot 1,0125^{-2} + 8000 \cdot 1,0125^{-8}
$$

$$
x \cdot 1,0125^{-6} = 5000 \cdot 1,0125^{-2} + 8000 \cdot 1,0125^{-8} - 7000
$$

$$
x = \frac{5000 \cdot 1,0125^{-2} + 8000 \cdot 1,0125^{-8} - 7000}{1,0125^{-6}}
$$

Leggo sulle tavole e sostituisco:

$$
x = \frac{5000 \cdot 1,02515625 + 8000 \cdot 1,10448610 - 7000}{1,07738318}
$$

$$
x = \frac{6961,67005}{1,07738318} = 6461,647238636
$$

Approssimo a $6461,65\text{ €}$, quindi fra $6\text{ anni}$ la banca mi verserà a saldo $6461,65\text{ €}$.