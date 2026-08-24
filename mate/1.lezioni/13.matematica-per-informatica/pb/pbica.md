Ciò sarebbe a dire che all'indirizzo a sinistra corrisponde l'insieme di dati al centro, insieme di dati che a destra è in codice ASCII.

> **Nota:** Ricordo che nell'indirizzo sono sottointesi gli indirizzi compresi fra quello indicato e quello della riga sotto ($16$ indirizzi più avanti).

| [**indirizzo esadecimale**]{.text-red} | [**indirizzo binario**]{.text-red} | [**dato in esadecimale**]{.text-red} | [**dato in Byte**]{.text-red} |
| :---: | :---: | :---: | :---: |
| [**$0CC103D0$**]{.text-green} | [**$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 0000$**]{.text-green} | [**$27$**]{.text-red} | [**$00100110$**]{.text-red} |
| [**$0CC103D1$**]{.text-green} | [**$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 0001$**]{.text-green} | [**$5A$**]{.text-red} | [**$01011010$**]{.text-red} |
| [**$0CC103D2$**]{.text-green} | [**$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 0010$**]{.text-green} | [**$07$**]{.text-red} | [**$00000111$**]{.text-red} |
| [**$0CC103D3$**]{.text-green} | [**$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 0011$**]{.text-green} | [**$5B$**]{.text-red} | [**$01011011$**]{.text-red} |
| [**$0CC103D4$**]{.text-green} | [**$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 0100$**]{.text-green} | [**$28$**]{.text-red} | [**$00101000$**]{.text-red} |
| [**$0CC103D5$**]{.text-green} | [**$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 0101$**]{.text-green} | [**$5B$**]{.text-red} | [**$01011011$**]{.text-red} |
| [**$0CC103D6$**]{.text-green} | [**$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 0110$**]{.text-green} | [**$07$**]{.text-red} | [**$00000111$**]{.text-red} |
| [**$0CC103D7$**]{.text-green} | [**$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 0111$**]{.text-green} | [**$B9$**]{.text-red} | [**$10111001$**]{.text-red} |
| [**$0CC103D8$**]{.text-green} | [**$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 1000$**]{.text-green} | [**$28$**]{.text-red} | [**$00101000$**]{.text-red} |
| [**$0CC103D9$**]{.text-green} | [**$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 1001$**]{.text-green} | [**$6C$**]{.text-red} | [**$011001100$**]{.text-red} |
| [**$0CC103DA$**]{.text-green} | [**$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 1010$**]{.text-green} | [**$07$**]{.text-red} | [**$00000111$**]{.text-red} |
| [**$0CC103DB$**]{.text-green} | [**$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 1011$**]{.text-green} | [**$60$**]{.text-red} | [**$01100000$**]{.text-red} |
| [**$0CC103DC$**]{.text-green} | [**$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 1100$**]{.text-green} | [**$29$**]{.text-red} | [**$00101001$**]{.text-red} |
| [**$0CC103DD$**]{.text-green} | [**$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 1101$**]{.text-green} | [**$80$**]{.text-red} | [**$10000000$**]{.text-red} |
| [**$0CC103DE$**]{.text-green} | [**$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 1110$**]{.text-green} | [**$07$**]{.text-red} | [**$00000111$**]{.text-red} |
| [**$0CC103DF$**]{.text-green} | [**$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 1111$**]{.text-green} | [**$75$**]{.text-red} | [**$01110101$**]{.text-red} |
| [**$0CC103E0$**]{.text-green} | [**primo indirizzo della riga sotto**]{.text-green} | | |

In pratica il computer scrive così, intercalando i dati con bit di controllo (chiamiamoli car.c.).

io ti scrivo i primi $5$ byte, lascio qualche spazio per far seguire meglio, e distinguo nel colore i $32$ bit di indirizzo (in verde) dagli $8$ bit di dati (in rosso) ma nel computer non ci sono spazi:

**(car.c.) [$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 0000$]{.text-green}[$00100110$]{.text-red} (car.c.) [$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 0001$]{.text-green}[$01011010$]{.text-red} (car.c.) [$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 0010$]{.text-green}[$00000111$]{.text-red} (car.c.) [$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 0011$]{.text-green}[$01011011$]{.text-red} (car.c.) [$0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 0100$]{.text-green}[$00101000$]{.text-red} (car.c.) .....**