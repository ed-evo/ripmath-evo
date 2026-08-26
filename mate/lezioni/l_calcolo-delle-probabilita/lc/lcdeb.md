# Teorema della probabilità composta

Consideriamo un evento composto da più eventi tali che siano indipendenti, nel senso che l'accadere del primo non influenzi l'accadere del secondo: allora possiamo dire che:

**La probabilità dell'evento composto è uguale al prodotto delle probabilità degli eventi componenti**

se gli eventi non sono indipendenti posso ancora applicare il teorema ma le probabilità vanno calcolate caso per caso.

***

Chiariamo meglio su due esempi:
il primo con eventi indipendenti

**Trovare la probabilità che estraendo successivamente due carte da un mazzo di $40$ e rimettendo la prima carta estratta nel mazzo siano la prima una figura e la seconda un asso**

La probabilità è composta dai due eventi:
- uscita di una figura
- uscita di un asso

Prima deve uscire una figura e poi deve uscire un asso e devono accadere entrambi gli eventi, ma il primo evento non influisce sul secondo quindi posso applicare il teorema:

**probabilità che estraendo due carte da un mazzo di $40$ la prima sia una figura e la seconda un asso =**
**= probabilità che la prima carta sia una figura $\cdot$ probabilità che la seconda carta sia un asso**

le figure sono $12$ quindi la probabilità di uscita di una figura è $12$ su $40$; gli assi sono $4$, quindi la probabilità di uscita di un asso è $4$ su $40$.

$$
p = \frac{12}{40} \cdot \frac{4}{40} = \frac{3}{100} = 0,03 = 3\%
$$

***

**Trovare la probabilità che estraendo successivamente due carte da un mazzo di $40$, senza rimettere la prima estratta nel mazzo, siano la prima una figura e la seconda un asso**

La probabilità è composta dai due eventi:
- uscita di una figura
- uscita di un asso

Prima deve uscire una figura e poi deve uscire un asso e devono accadere entrambi gli eventi, quindi posso applicare il teorema:
Però l'uscita del primo influisce sulla probabilità del secondo, nel senso che nel secondo evento ho una carta di meno per i casi possibili.

**probabilità che estraendo due carte da un mazzo di $40$ la prima sia una figura e la seconda un asso =**
**= probabilità che la prima carta sia una figura $\cdot$ probabilità che la seconda carta sia un asso**

le figure sono $12$ quindi la probabilità di uscita di una figura è $12$ su $40$; gli assi sono $4$ ma le carte rimaste dopo l'uscita della prima carta sono $39$, quindi la probabilità di uscita di un asso è $4$ su $39$.

$$
p = \frac{12}{40} \cdot \frac{4}{39} = \frac{2}{65} \approx 0,03 = 3\%
$$

La probabilità è leggermente più del $3\%$ ($3,0769\%$), ma, approssimando, mettiamo il $3\%$.

***

> **Nota bene:**
> È possibile applicare il teorema della probabilità composta quando puoi esprimere il problema con la particella "e" (ed anche): **succede il primo evento <u>e</u> succede il secondo <u>ed anche</u> avviene il terzo.....**
>
> Corrisponde all'intersezione fra insiemi: [sviluppare il concetto]{.text-red}