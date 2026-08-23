[Il gioco organizzato]{.text-red-darken-1}

Quando si organizza un gioco occorre partire dall'impostare il gioco equo e, successivamente, variare le probabilità di vincita per ritagliare una percentuale di guadagno per l'organizzatore, ricordando che, per avere una vincita molto probabile, bisogna aumentare il numero di partite giocate.

***

Vediamo un esempio classico:
Nel gioco della Roulette puoi puntare i numeri da $$1$$ a $$36$$ e, se esce il numero puntato, ritiri la tua puntata e $$35$$ volte la posta giocata. Messo così il gioco è equo: vinco una volta ogni $$36$$ e ricevo $$36$$ volte la posta giocata ($$35$$ volte più la mia puntata). Allora per introdurre un guadagno per la casa da gioco viene introdotto il numero zero; in questo modo vinco una volta ogni $$37$$ e ricevo $$36$$ volte la posta giocata; in media la casa da gioco ha un guadagno pari ad $$1/37$$ delle somme giocate.

Alcune case da gioco giudicano insufficiente una tale vincita e quindi introducono anche il doppio zero, in tal caso il guadagno della casa da gioco è di $$2/38 = 1/19$$ delle somme giocate.

***

Un esempio di gioco costruito a tavolino è appunto il Superenalotto: gioco in cui le probabilità di vincere sono talmente minuscole da far lievitare il premio fino a somme superiori ai $$100.000.000$$ (cento milioni) di euro.

Una volta c'era una legge per cui lo stato, gestendo un gioco, poteva ritirare al massimo il $$65\%$$ della somma giocata restituendo con le vincite il restante $$35\%$$ (la mia memoria non mi permette di giurare su tali percentuali). Spero che tale legge sia ancora valida, ma non ci giurerei, viste le probabilità del superenalotto.

C'è anche da dire che nel superenalotto le possibilità di vincita sono talmente esigue che, facendo un $$5+1$$, lo stato restituirebbe solamente il $$20\%$$ allora, forse, le somme restanti vengono restituite ponendo una vincita anche per quaterne e cinquine ed introducendo numeri jolly.

***

Proviamo come esercizio a costruire un semplice gioco organizzato.

Prendiamo il gioco:
estrarre una carta da un mazzo di $$40$$.

Partiamo dal gioco equo.
Supponiamo di pagare una somma per l'evento "uscita di un asso" ed un'altra somma per l'evento "uscita di una carta di denari".
Siccome esiste l'asso di denari consideriamo allora tre eventi:

- $$E_1$$ uscita dell'asso di denari
- $$E_2$$ uscita di un asso diverso dall'asso di denari
- $$E_3$$ uscita di una carta di denari diversa dall'asso

La somma da giocare sia sempre $$1$$ euro e la posta non venga restituita in caso di vincita.

Le probabilità sono:

- $$p_1 = \text{probabilità di uscita dell'asso di denari} = 1/40$$
- $$p_2 = \text{probabilità di uscita di asso non di denari} = 3/40$$
- $$p_3 = \text{probabilità di uscita di carta di denari non asso} = 9/40$$

Per invogliare al gioco poniamo un premio più grosso sull'evento più difficile: ad esempio

- $$S_1 = 22 \text{ € se esce l'asso di denari}$$
- $$S_2 = 3 \text{ € se esce l'asso non di denari}$$
- $$S_3 = 1 \text{ € restituisco la posta se esce un denari diverso dall'asso}$$

In queste condizioni il gioco è equo, infatti la speranza matematica di chi tiene il banco è:

- $$S_4 = 1 \text{ € la puntata}$$
- $$p_4 = \text{probabilità di riscuotere la puntata (evento certo)} = 1$$
- $$S_4 p_4 = 1 \text{ €}$$

E facendo la somma di tutte le speranze matematiche (considerandole relativamente al banco):

[.text-red]
$$
S_1 p_1 + S_2 p_2 + S_3 p_3 + S_4 p_4 =
$$
$$
= - 22 \text{ €} \cdot 1/40 - 3 \text{ €} \cdot 3/40 - 1 \text{ €} \cdot 9/40 + 1 \text{ €} \cdot 40/40 = -22/40 \text{ €} - 9/40 \text{ €} - 9/40 \text{ €} + 1 \text{ €}
$$
$$
= -40/40 \text{ €} + 1 \text{ €} = -1 \text{ €} + 1 \text{ €} = 0
$$

Ora devo decidere quanto voglio guadagnare in media ogni $$40$$ giocate:

Così com'è il gioco ogni $$40$$ giocate:
- esce una volta l'asso di denari
- escono tre volte gli altri assi
- escono $$9$$ volte carte non di denari diverse dall'asso
- $$27$$ volte escono altre carte

Posso intervenire in vari modi:
- Potrei intervenire sulla vincita principale, ma forse non mi conviene perché è quella che attira i giocatori, anche se una vincita di $$20$$ euro, invece di $$22$$, è sempre buona e la cifra tonda fa più impressione.
- Nemmeno mi conviene intervenire nella vincita minore perché è quella che, visto il maggior numero di uscite, dà l'impressione di vincere facilmente.
- Mi conviene intervenire sulla vincita per "uscita di un asso non di denari" portandola da $$3 \text{ €}$$ a $$2 \text{ €}$$.

In questo modo la mia speranza matematica non è più nulla ma sale a $$3/40$$, cioè ogni $$40$$ partite io guadagnerò in media $$3$$ euro.

[.text-red]
$$
S_1 p_1 + S_2 p_2 + S_3 p_3 + S_4 p_4 =
$$
$$
= - 22 \text{ €} \cdot 1/40 - 2 \text{ €} \cdot 3/40 - 1 \text{ €} \cdot 9/40 + 1 \text{ €} \cdot 40/40 = -22/40 \text{ €} - 6/40 \text{ €} - 9/40 \text{ €} + 1 \text{ €}
$$
$$
= -37/40 \text{ €} + 1 \text{ €} = + 3/40 \text{ €}
$$

***

Per uso didattico trasformiamo il gioco in questo modo:

Estraggo una carta da un mazzo di $$40$$, e la pongo coperta sul tavolo:
Pongo $$1$$ euro sulla carta:
- Se la carta è l'asso di denari ricevo $$21$$ euro più la mia posta
- Se la carta è un asso diverso da quello di denari ricevo $$1$$ euro più la mia posta
- Se la carta è una figura di denari posso ritirare la mia posta
- Se la carta è diversa dalle precedenti perdo $$1$$ euro

Evidentemente è lo stesso gioco, solo che la posta non viene pagata prima del gioco, ma messa sulla carta in gioco. Infatti la speranza matematica, riferita al giocatore, è:

$$
Sp = 21 \cdot 1/40 + 1 \cdot 3/40 + 0 \cdot 9/40 - 1 \cdot 27/40 = -3/40 \text{ €}
$$

Faremo riferimento, in futuro, a questa forma del gioco.