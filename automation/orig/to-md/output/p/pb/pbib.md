# [Relazione fra sistema esadecimale e binario]{.text-red}

Vale la relazione importantissima: **Un numero esadecimale si può trasformare in binario semplicemente trasformando in binario ciascuna delle sue cifre**:

ad esempio il numero esadecimale $$F\ A$$ corrisponderà al binario $$1111\ 1010$$.

> **Da notare:** che un esadecimale a due cifre è composto da $$8$$ bit ed $$8$$ bit = $$1\ \text{Byte}$$ è il pacchetto di base scelto per trasmettere le informazioni (codice ASCII). Quindi la memoria del nostro computer si potrà rappresentare mediante blocchi esadecimali a due cifre, molto più leggibili che blocchi di $$8$$ bit.

Per poter fare qualcosa di buono è necessario conoscere a memoria l'equivalenza fra cifra esadecimale e Byte per le cifre da $$0$$ a $$F(15)$$.

| numero decimale | cifra esadecimale | Byte corrispondente |
| :---: | :---: | :---: |
| $$0$$ | $$0$$ | $$0000$$ |
| $$1$$ | $$1$$ | $$0001$$ |
| $$2$$ | $$2$$ | $$0010$$ |
| $$3$$ | $$3$$ | $$0011$$ |
| $$4$$ | $$4$$ | $$0100$$ |
| $$5$$ | $$5$$ | $$0101$$ |
| $$6$$ | $$6$$ | $$0110$$ |
| $$7$$ | $$7$$ | $$0111$$ |
| $$8$$ | $$8$$ | $$1000$$ |
| $$9$$ | $$9$$ | $$1001$$ |
| $$10$$ | $$A$$ | $$1010$$ |
| $$11$$ | $$B$$ | $$1011$$ |
| $$12$$ | $$C$$ | $$1100$$ |
| $$13$$ | $$D$$ | $$1101$$ |
| $$14$$ | $$E$$ | $$1110$$ |
| $$15$$ | $$F$$ | $$1111$$ |

Detto ciò sarà immediato associare ad ogni carattere ASCII una coppia di numeri esadecimali da $$00$$ (per il Byte $$00000000$$) ad $$FF$$ (per il Byte $$11111111$$).