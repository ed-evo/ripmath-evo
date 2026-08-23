# [Distanza terra luna]{.text-red}

> Ormai l'argomento è non più d'attualità: se vuoi misurare la distanza terra-luna oggi basta usare un raggio laser e misurare il tempo che impiega per essere riflesso verso l'osservatore: ottieni una misura con una precisione sbalorditiva. Quando gli astronauti sono sbarcati sulla luna hanno lasciato uno specchio appositamente per questo. Comunque storicamente questi calcoli hanno avuto la loro importanza e quindi conviene conoscerli: qui misuriamo la distanza fra i centri della terra e della luna.

Consideriamo due punti $$A$$ e $$B$$ sulla superficie terrestre e sullo stesso meridiano, per semplicità da parti opposte rispetto all'equatore terrestre;

Conosciamo:
- Il valore del raggio terrestre $$AC$$ e $$BC$$
- il valore dell'angolo $$ACL = \gamma_1$$ (latitudine di $$A$$)
- il valore dell'angolo $$BCL = \gamma_2$$ (latitudine di $$B$$)
- il valore degli angoli $$CAB = CBA = \alpha_1 = \beta_1 = (180^\circ - \gamma_1 - \gamma_2) : 2$$

> Il triangolo $$ACB$$ è isoscele avendo come lati due raggi della sfera terrestre (effettivamente la terra non è sferica, comunque, per noi che studiamo la distanza per ragioni storiche, è sufficiente considerarla sferica).

Misuriamo inoltre l'angolo $$\beta_2$$ (declinazione della luna rispetto alla verticale).

Considero il triangolo $$LCB$$:
so che l'angolo $$LBC = 180^\circ - \beta_2$$
inoltre l'angolo $$BLC = 180^\circ - (\gamma_2 + 180^\circ - \beta_2) = \beta_2 - \gamma_2$$

> Puoi anche osservare che $$\beta_2$$ è esterno al triangolo $$LCB$$ mentre $$\gamma_2$$ è interno e non adiacente: allora l'altro angolo interno e non adiacente vale $$\beta_2 - \gamma_2$$.

Quindi conosco due angoli ed un lato e posso risolverlo:

Applico il [teorema dei seni](../id/idd.html)

$$
\frac{\textcolor{red}{LC}}{\textcolor{red}{\sin(180^\circ - \beta_2)}} = \frac{\textcolor{red}{AC}}{\textcolor{red}{\sin(\beta_2 - \gamma_2)}}
$$

e, per la relazione sugli [angoli supplementari](../ib/ibdbb.html)

$$
\frac{\textcolor{red}{LC}}{\textcolor{red}{\sin \beta_2}} = \frac{\textcolor{red}{AC}}{\textcolor{red}{\sin(\beta_2 - \gamma_2)}}
$$

Quindi otteniamo

$$
\textcolor{red}{LC} = \frac{\textcolor{red}{AC \sin \beta_2}}{\textcolor{red}{\sin(\beta_2 - \gamma_2)}}
$$

> Per esercizio puoi ripetere la misura per una latitudine sopra l'equatore (punto $$A$$) oppure puoi calcolare la distanza fra il punto $$B$$ (superficie della terra) e la luna.