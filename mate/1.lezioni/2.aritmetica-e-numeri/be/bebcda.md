# Quoziente di numeri complessi in forma trigonometrica: dimostrazione

Considero i numeri complessi

$$
\textcolor{blue}{z_1 = a + ib = \rho_1 (\cos \theta_1 + i \sin \theta_1)}
$$

$$
\textcolor{blue}{z_2 = c + id = \rho_2 (\cos \theta_2 + i \sin \theta_2)}
$$

Per trovare la regola eseguiamo il quoziente secondo la regola già trovata per i numeri in forma canonica:

$$
\textcolor{blue}{\frac{Z_1}{Z_2} = \frac{\rho_1 (\cos \theta_1 + i \sin \theta_1)}{\rho_2 (\cos \theta_2 + i \sin \theta_2)}}
$$

Razionalizzo, cioè moltiplico sopra e sotto per il denominatore con il segno in mezzo cambiato (solo la parte dentro parentesi):

$$
\textcolor{blue}{\frac{\rho_1 (\cos \theta_1 + i \sin \theta_1)}{\rho_2 (\cos \theta_2 + i \sin \theta_2)} \cdot \frac{(\cos \theta_2 - i \sin \theta_2)}{(\cos \theta_2 - i \sin \theta_2)}}
$$

Eseguo i calcoli: al numeratore devo fare il prodotto normale, al denominatore è un prodotto notevole:

$$
\textcolor{blue}{\frac{\rho_1 (\cos \theta_1 \cos \theta_2 - i \cos \theta_1 \sin \theta_2 + i \sin \theta_1 \cos \theta_2 - i^2 \sin \theta_1 \sin \theta_2)}{\rho_2 (\cos^2 \theta_2 - i^2 \sin^2 \theta_2)}}
$$

Ricordando che $i^2 = -1$ posso scrivere:

$$
\textcolor{blue}{\frac{\rho_1 (\cos \theta_1 \cos \theta_2 - i \cos \theta_1 \sin \theta_2 + i \sin \theta_1 \cos \theta_2 + \sin \theta_1 \sin \theta_2)}{\rho_2 (\cos^2 \theta_2 + \sin^2 \theta_2)}}
$$

Al numeratore raggruppo le parti reali e le parti immaginarie e poiché per la prima relazione fondamentale della trigonometria si ha $\cos^2 \theta_2 + \sin^2 \theta_2 = 1$ posso scrivere:

$$
\textcolor{blue}{\frac{\rho_1 [(\cos \theta_1 \cos \theta_2 + \sin \theta_1 \sin \theta_2) + i (\sin \theta_1 \cos \theta_2 - \cos \theta_1 \sin \theta_2)]}{\rho_2}}
$$

Dentro la prima parentesi l'espressione è il coseno della differenza di due angoli.
Dentro la seconda parentesi l'espressione è il seno della differenza di due angoli.
Quindi posso scrivere:

$$
\textcolor{blue}{\frac{\rho_1}{\rho_2} [\cos(\theta_1 - \theta_2) + i \sin(\theta_1 - \theta_2)]}
$$