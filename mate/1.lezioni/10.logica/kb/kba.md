# Negazione

La negazione è un'operazione **unaria** perché si applica su una sola proposizione ed è definita come l'operazione che applicata a $p$ restituisce il valore di verità contrario di $p$.

Analogamente alla simbologia usata negli insiemi complementari indicheremo la negazione di $p$ con il simbolo $\overline{p}$.

Cioè avremo:

$$
\overline{p} = \text{non } p
$$

Avremo quindi la tavola di verità:

| $p$ | $\overline{p}$ |
| :---: | :---: |
| $\textcolor{red}{v}$ | $\textcolor{red}{f}$ |
| $\textcolor{red}{f}$ | $\textcolor{red}{v}$ |

Cioè:
- se $p$ è vera allora $\overline{p}$ è falsa
- se $p$ è falsa allora $\overline{p}$ è vera

---

Esempi:

Data la proposizione:
***Roma è la capitale d'Italia***
la sua negazione sarà:
***Roma non è la capitale d'Italia***
la prima è vera e la seconda è falsa

---

Data la proposizione:
***3 più 3 è uguale a nove***
la sua negazione sarà:
***3 più 3 non è uguale a 9***
la prima è falsa e la seconda è vera

---

Da notare che l'insieme complementare di un insieme $A$ rispetto ad $E$ è l'insieme degli elementi di $E$ che **non** appartengono ad $A$.

Data la proposizione:
***{elementi appartenenti ad A}***
la sua negazione sarà:
***{elementi non appartenenti ad A}***

e quindi:

$$
\overline{A} = \text{non } A
$$

Cioè la negazione in logica corrisponde al complementare nella teoria degli insiemi.

---

> **Attenzione:** nel discorso la negazione di una proposizione si ottiene **solamente** aggiungendo nel discorso la particella **non**:
> così la negazione di
> **"Parigi è la capitale della Francia"**
> si ottiene in modo corretto con
> **"Parigi non è la capitale della Francia"**

---

Vista l'importanza del concetto, segnalo l'equivalenza, all'interno delle proprie teorie, dei simboli:

- [non]{.text-red} nel discorso ordinario
- [ / ]{.text-red} (barra su una qualunque relazione) nelle definizioni: esempio $\textcolor{red}{\not\in}$ si legge **non** appartiene
- [ $\overline{\phantom{p}}$ ]{.text-red} (non) soprasegnato su proposizioni in logica
- [ $\overline{\phantom{A}}$ ]{.text-red} (insieme complementare) soprasegnato su insiemi
- [ $\neg$ ]{.text-red} (not) in informatica

---

La doppia negazione equivale alla proposizione di partenza:

| $p$ | $\overline{p}$ | $\overline{\overline{p}}$ |
| :---: | :---: | :---: |
| $\textcolor{red}{v}$ | $\textcolor{red}{f}$ | $\textcolor{red}{v}$ |
| $\textcolor{red}{f}$ | $\textcolor{red}{v}$ | $\textcolor{red}{f}$ |

Basta osservare l'uguaglianza delle tavole di verità.
Sarebbe a dire:
**Due negazioni successive equivalgono ad un'affermazione**

---

È un concetto che troviamo piuttosto diffusamente in matematica:
- meno per meno fa più
- il complementare del complementare di un insieme è l'insieme di partenza
- l'opposto dell'opposto di un numero equivale al numero stesso
- l'inverso dell'inverso di un numero equivale al numero stesso

---

Esempio:
**"Non è vero che Roma non è la capitale dell'Italia"**
equivale a
**"È vero che Roma è la capitale dell'Italia"**