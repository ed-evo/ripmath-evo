# Prodotto di numeri complessi in forma trigonometrica: dimostrazione

Considero i numeri complessi

[$z_1 = a + ib = \rho_1 (\cos \Theta_1 + i \sin \Theta_1)$]{.text-blue}
[$z_2 = c + id = \rho_2 (\cos \Theta_2 + i \sin \Theta_2)$]{.text-blue}

Per trovare la regola eseguiamo il prodotto termine a termine:

[$$
z_1 \cdot z_2 = [\rho_1 (\cos \Theta_1 + i \sin \Theta_1)] \cdot [\rho_2 (\cos \Theta_2 + i \sin \Theta_2)] =
$$]{.text-blue}

[$$
= \rho_1 \rho_2 (\cos \Theta_1 \cos \Theta_2 + i \cos \Theta_1 \sin \Theta_2 + i \sin \Theta_1 \cos \Theta_2 + i^2 \sin \Theta_1 \sin \Theta_2) =
$$]{.text-blue}

poiché $i^2 = -1$ ottengo

[$$
= \rho_1 \rho_2 (\cos \Theta_1 \cos \Theta_2 + i \cos \Theta_1 \sin \Theta_2 + i \sin \Theta_1 \cos \Theta_2 - \sin \Theta_1 \sin \Theta_2) =
$$]{.text-blue}

raggruppo le parti reali e le parti immaginarie

[$$
= \rho_1 \rho_2 [(\cos \Theta_1 \cos \Theta_2 - \sin \Theta_1 \sin \Theta_2) + (i \cos \Theta_1 \sin \Theta_2 + i \sin \Theta_1 \cos \Theta_2)] =
$$]{.text-blue}

[$$
= \rho_1 \rho_2 [(\cos \Theta_1 \cos \Theta_2 - \sin \Theta_1 \sin \Theta_2) + i(\cos \Theta_1 \sin \Theta_2 + \sin \Theta_1 \cos \Theta_2)] =
$$]{.text-blue}

Dentro la prima parentesi l'espressione è il [coseno della somma di due angoli](../../i/ic/icaae.html)
Dentro la seconda parentesi l'espressione è il [seno della somma di due angoli](../../i/ic/icaae.html)
quindi posso scrivere

[$$
= \rho_1 \rho_2 [\cos(\Theta_1 + \Theta_2) + i \sin(\Theta_1 + \Theta_2)]
$$]{.text-blue}