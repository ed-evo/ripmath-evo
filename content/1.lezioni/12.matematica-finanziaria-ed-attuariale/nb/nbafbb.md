# [Esercizio sul calcolo del capitale ad interesse composto per tempi interi con tasso non sulle tavole]{.text-red}

Ho impiegato un capitale per $$18$$ anni ad interesse composto al $$4,865\%$$ ed ho ricevuto come montante la somma di $$\text{€ } 22225,80$$.
Calcolare l'ammontare del capitale versato inizialmente.

Dati:
- $$M_5 = 22225,80\text{ €}$$
- $$t = 18$$
- $$i = 4,86\% = 0,04865$$

Faccio riferimento alla formula:

$$
C = \frac{M_t}{(1+i)^t}
$$

1. Utilizzo la calcolatrice
Imposto, sullo schermo il calcolo:
$$22225,80 : ((1 + 0,04865)^{18})$$
ottengo $$9451,642809399$$ che approssimo a $$9451,64$$

il capitale è di $$\text{€ } 9451,64$$

2. > Una divisione fra numeri con molte cifre è piuttosto laboriosa, ma abbiamo visto nell'esercizio precedente che l'approssimazione è troppo elevata; quindi trasformiamo in logaritmo solamente l'espressione $$(1,04865)^{18}$$, calcoliamola poi eseguiamo la divisione con la calcolatrice.

$$\log(1,04865)^{18} = 18 \log 1,04865 =$$

la caratteristica, essendo il mio numero compreso fra $$1$$ e $$10$$, vale $$0$$
cerco la mantissa
leggo sulle tavole logaritmiche a $$7$$ decimali
il mio logaritmo $$10486,5$$ è compreso fra:

- $$10486 \rightarrow 0206099$$
- $$10487 \rightarrow 0206513$$
- Differenza: $$414$$

Di fianco ai due risultati trovi il numero $$414$$ che corrisponde alla differenza fra i due valori della mantissa mentre la differenza fra il mio valore e quello minore è:
$$10486,5 - 10486 = 0,5$$
Nella tabella del $$414$$ a $$5$$ corrisponde $$207$$ quindi lo sommo alla mantissa:
$$0206099 + 207 = 0206306$$
$$\log 1,04865 = 0,0206306$$

Quindi:
$$18 \log 1,04865 = 18 \cdot 0,0206306 = 0,3713508$$

Questo è il logaritmo, ora trovo l'antilogaritmo (lo trasformo in valore normale):
$$\text{AntiLog } 0,3713508$$
Essendo la caratteristica $$0$$ il valore dell'antilogaritmo sarà compreso fra $$1$$ e $$10$$, quindi avremo una cifra significativa prima della virgola.
In questo caso, visto il valore della mantissa, debbo cercare nelle tavole a $$5$$ decimali.
la mia mantissa a $$5$$ decimali ($$37135,08$$) è compresa fra i numeri (leggo le tavole cercando nelle mantisse a $$5$$ decimali):

- $$37125 \rightarrow 2351$$
- $$37144 \rightarrow 2352$$
- Differenza: $$19$$

Di fianco ai due risultati trovi il numero $$19$$ che corrisponde alla differenza fra i due valori della mantissa mentre la differenza fra il mio valore e quello minore è:
$$37135,08 - 37125 = 10,08$$
Nella tabella del $$19$$ cerco $$10,08$$;

il numero minore più vicino è $$9,5$$ cui corrisponde la sesta cifra del nostro numero, cioè $$5$$.
mi resta $$10,08 - 9,5 = 0,58$$; sposto di un posto la virgola e cerco la settima cifra decimale.
Nella tabella del $$19$$ cerco $$5,8$$;
siccome trovo $$5,7$$ che è molto vicino non prenderò altre cifre.
a $$5,7$$ corrisponde $$3$$ che sarà la settima cifra del nostro numero.
ottengo $$235153$$
quindi scrivo:
$$\text{AntiLog } 0,3713508 = 2,35153$$

quindi:
$$C = 22225,80 : 2,35153 = 9451,633617262$$

e, approssimando:
il capitale è di $$\text{€ } 9451,63$$