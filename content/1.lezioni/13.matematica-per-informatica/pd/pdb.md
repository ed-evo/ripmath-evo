# [Passaggio al complementare]{.text-red}

Possiamo pensare l'attivazione di un interruttore come il passaggio al complementare nell'algebra di Boole: infatti se lo stato è $$1$$ aprendo l'interruttore passeremo allo stato $$0$$ e se lo stato è $$0$$ chiudendo l'interruttore passeremo allo stato $$1$$.

| $$a$$ | $$à$$ |
| :---: | :---: |
| [$$1$$]{.text-red} | [$$0$$]{.text-red} |
| [$$0$$]{.text-red} | [$$1$$]{.text-red} |

Questo, sostituendo $$0$$ con **FALSO** e $$1$$ con **VERO** corrisponde alla tavola di verità per la negazione logica: nell'algebra di Boole posso chiamare gli elementi indifferentemente $$0$$ e $$1$$ oppure $$F$$ e $$V$$ e questo ci permetterà di usare il computer oltre che per fare calcoli numerici anche per fare calcoli logici, con tutte le possibilità che ciò offre.

| $$a$$ | $$à$$ |
| :---: | :---: |
| $$p$$ | $$\overline{p}$$ |
| [$$V$$]{.text-red} | [$$F$$]{.text-red} |
| [$$F$$]{.text-red} | [$$V$$]{.text-red} |

Tale circuito in informatica viene detto **porta not** o semplicemente **not** ed è tale che il valore in ingresso viene cambiato in uscita nel suo valore complementare; cioè se entra $$1$$ esce $$0$$ e se entra $$0$$ esce $$1$$.

> **Nota:** In qualche testo c'è un cerchietto all'uscita, in qualche altro no, noi lo useremo preferibilmente con il cerchietto, perché il numero di testi con cerchietto è superiore al numero di quelli senza: non so di preciso perché c'è il cerchietto e a cosa serva: su internet non ho trovato nulla. Penso sia usanza mettere il cerchietto in quelle porte che "invertono" il risultato, ma è solo una deduzione. Se qualcuno di voi lo sa e me lo fa sapere mi farà un grosso favore: l'indirizzo e-mail è nella home page; grazie.