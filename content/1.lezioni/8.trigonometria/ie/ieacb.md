# [Formula di Erone]{.text-red}
## Area del triangolo conoscendone la misura dei tre lati

Consideriamo un triangolo qualunque $$ABC$$ e supponiamo di conoscerne la misura dei tre lati; in queste condizioni posso ricavare una formula che mi permetta di calcolare l'area del triangolo stesso.

Supponiamo di conoscere:

$$
\overline{AB} = c
$$
$$
\overline{BC} = a
$$
$$
\overline{AC} = b
$$

con $$a$$, $$b$$ e $$c$$ numeri noti.

Partiamo dalla formula dell'area del triangolo conoscendone due lati e l'angolo compreso:

$$
A_s = \frac{1}{2} ac \sin \beta
$$

> Naturalmente possiamo scegliere un angolo qualunque e i due lati che lo comprendono.

Per la formula di duplicazione del seno possiamo scrivere:

$$
A_s = \frac{1}{2} 2ac \sin \frac{\beta}{2} \cos \frac{\beta}{2}
$$

$$
A_s = ac \sin \frac{\beta}{2} \cos \frac{\beta}{2}
$$

Ora applico le formule di Briggs:

$$
A_s = ac \sqrt{\frac{(p-a)(p-c)}{ac}} \sqrt{\frac{p(p-b)}{ac}}
$$

Moltiplico:

$$
A_s = ac \sqrt{\frac{p(p-a)(p-b)(p-c)}{a^2c^2}}
$$

Ora estraggo $$a^2c^2$$ di radice:

$$
A_s = \frac{ac}{ac} \sqrt{p(p-a)(p-b)(p-c)}
$$

Semplifico ed ottengo:

$$
\textcolor{blue}{A_s = \sqrt{p(p-a)(p-b)(p-c)}}
$$