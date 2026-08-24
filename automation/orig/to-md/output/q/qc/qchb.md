[# Differenza di successioni]{.text-red}

Date la successione $a$
$$
a_1, a_2, a_3, a_4, \dots, a_n, \dots
$$
e la successione $b$
$$
b_1, b_2, b_3, b_4, \dots, b_n, \dots
$$

Chiameremo **successione differenza** delle successioni $a$ e $b$ la successione $a-b$ data da
$$
a_1-b_1, a_2-b_2, a_3-b_3, a_4-b_4, \dots, a_n-b_n, \dots
$$

cioè ogni termine è la differenza dei termini di posto corrispondente delle due successioni.

Enunciamo alcune proprietà:

- la differenza fra due successioni aventi lo stesso limite è infinitesima
  > **Cioè:** se 
  > $\lim_{n \to \infty} a_n = a$ e $\lim_{n \to \infty} b_n = a$
  > allora la successione
  > $a_1-b_1, a_2-b_2, a_3-b_3, a_4-b_4, \dots, a_n-b_n, \dots$
  > è infinitesima.

- La differenza di due successioni infinitesime è ancora una successione infinitesima.

- La differenza di una successione divergente con una successione limitata è una successione divergente.

- Invece la differenza di due successioni divergenti può essere una successione convergente, divergente od anche indeterminata.

  Facciamo anche qui degli esempi facendo riferimento a quelli sulla somma nella pagina precedente:

  1. Eseguendo la sottrazione fra la successione divergente
     $2, 4, 8, 16, \dots, 2^n, \dots$
     con la successione divergente (cambio di segno la precedente ed aggiungo $2$)
     $2-2, 2-4, 2-8, 2-16, \dots, 2-2^n, \dots$
     la scrivo meglio
     $$ 0, -2, -6