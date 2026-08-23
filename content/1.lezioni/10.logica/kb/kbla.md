# Operatori logici come disposizioni con ripetizione

Prima di procedere diamo uno sguardo d'insieme ai possibili operatori logici che derivano da due proposizioni: notiamo che si tratta di [disposizioni con ripetizione](../../l/lb/lbbb.html) di $$2$$ oggetti ($$v$$ e $$f$$) presi $$4$$ a $$4$$, cioè con $$2$$ proposizioni avremo per gli operatori logici $$16$$ possibilità ($$D'_{2,4} = 2^4 = 16$$).

Nella seguente tabella elenco le $$16$$ possibilità; chiamo:
- $$p$$ la prima proposizione
- $$q$$ la seconda proposizione

| $$p$$ | $$q$$ | 1: $$T$$ | 2: $$p \lor q$$ | 3: $$\overline{p \lor q}$$ | 4: $$p \rightarrow q$$ | 5: $$\overline{p \land q}$$ | 6: $$p$$ | 7: $$q$$ | 8: $$p \text{ aut } q$$ | 9: $$p \leftrightarrow q$$ | 10: $$\overline{q}$$ | 11: $$\overline{p}$$ | 12: $$p \land q$$ | 13: $$\overline{p \rightarrow q}$$ | 14: $$\overline{p} \land q$$ | 15: $$\overline{p \lor q}$$ | 16: $$C$$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $$f$$ | $$f$$ | $$v$$ | $$f$$ | $$v$$ | $$v$$ | $$v$$ | $$f$$ | $$f$$ | $$f$$ | $$v$$ | $$v$$ | $$v$$ | $$f$$ | $$f$$ | $$f$$ | $$v$$ | $$f$$ |
| $$f$$ | $$v$$ | $$v$$ | $$v$$ | $$f$$ | $$v$$ | $$v$$ | $$f$$ | $$v$$ | $$v$$ | $$f$$ | $$f$$ | $$v$$ | $$f$$ | $$f$$ | $$v$$ | $$f$$ | $$f$$ |
| $$v$$ | $$f$$ | $$v$$ | $$v$$ | $$v$$ | $$f$$ | $$v$$ | $$v$$ | $$f$$ | $$v$$ | $$f$$ | $$v$$ | $$f$$ | $$f$$ | $$v$$ | $$f$$ | $$f$$ | $$f$$ |
| $$v$$ | $$v$$ | $$v$$ | $$v$$ | $$v$$ | $$v$$ | $$f$$ | $$v$$ | $$v$$ | $$f$$ | $$v$$ | $$f$$ | $$f$$ | $$v$$ | $$f$$ | $$v$$ | $$f$$ | $$f$$ |

Se vuoi approfondire puoi cliccare sulle colonne in basso della tabella: ti si aprirà la pagina relativa all'operatore logico presente in quella colonna.

Da notare che per ogni proposizione esiste la proposizione complementare (basta che nella colonna vengano scambiati $$v$$ ed $$f$$) e che il complementare della [coimplicazione](kbh.html) è la [disgiunzione esclusiva](kbe.html) (e viceversa).

> **Attenzione:** l'ordine di vero o falso nelle proposizioni è opposto a quello utilizzato per definire le operazioni logiche: cioè qui sono partito nella proposizione $$p$$ da $$f, f, v, v$$ invece che da $$v, v, f, f$$ e nella proposizione $$q$$ da $$f, v, f, v$$ invece che da $$v, f, v, f$$.
>
> Spero presto di riscrivere tutto utilizzando lo stesso tipo di ordinamento.

> **Nota:** è meglio indicare come ordine prima $$f$$ e poi $$v$$ perché esiste uno stretto collegamento con l'informatica e lì indicheremo come $$f$$ lo $$0$$ e come $$v$$ l'$$1$$, e $$0$$ precede $$1$$ nell'ordinamento dei numeri naturali.