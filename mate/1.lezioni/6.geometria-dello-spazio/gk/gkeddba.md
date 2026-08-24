# Asse di rotazione non passante per un lato del settore circolare

Occorre per prima cosa, per i solidi, aver sempre bene chiara la rappresentazione spaziale della figura: consideriamo il caso a fianco.

In questo caso l'area è data dalla superficie della zona sferica più le aree delle superfici dei due coni, quindi:

$$
A_s \text{ settore sferico} = A_s \text{ fascia} + A_s \text{ cono 1} + A_s \text{ cono 2}
$$

$$
A_s \text{ settore sferico} = \pi r (h_1 + h_2) + \pi r_1 \text{ apotema}_1 + \pi r_2 \text{ apotema}_2
$$

E siccome l'apotema dei coni vale $$r$$ avremo:

$$
A_s \text{ settore sferico} = \pi r (h_1 + h_2) + \pi r_1 r + \pi r_2 r = \pi r (h_1 + h_2 + r_1 + r_2)
$$

E poiché vale $$h = h_1 + h_2$$:

$$
A_s \text{ settore sferico} = \pi r (h + r_1 + r_2)
$$

Tale formula vale in generale, ricordando però che, nei casi come quello qui a fianco raffigurato, si tratta sempre della somma delle aree di una zona e di due coni, ma devi fare $$h = h_2 - h_1$$ poiché $$h$$ è l'altezza del segmento sferico a due basi cioè della zona sferica (in figura $$h$$ è il segmento compreso fra $$r_1$$ ed $$r_2$$).

> **Nota:** Come vedi è essenziale avere ben chiara la figura per poter decidere se fare la somma o la differenza.