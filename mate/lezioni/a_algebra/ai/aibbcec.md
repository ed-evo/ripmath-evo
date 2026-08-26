# Determinanti 2x2 estraibili dalla matrice incompleta

Tolgo gli elementi in blu

Tengo fissa la terza riga e faccio scorrere la colonna (terza, seconda prima)

$$
\begin{vmatrix} a_{1,1} & a_{1,2} & \textcolor{blue}{a_{1,3}} \\ a_{2,1} & a_{2,2} & \textcolor{blue}{a_{2,3}} \\ \textcolor{blue}{a_{3,1}} & \textcolor{blue}{a_{3,2}} & \textcolor{blue}{a_{3,3}} \end{vmatrix} \Rightarrow \begin{vmatrix} a_{1,1} & a_{1,2} \\ a_{2,1} & a_{2,2} \end{vmatrix}
$$

$$
\begin{vmatrix} a_{1,1} & \textcolor{blue}{a_{1,2}} & a_{1,3} \\ a_{2,1} & \textcolor{blue}{a_{2,2}} & a_{2,3} \\ \textcolor{blue}{a_{3,1}} & \textcolor{blue}{a_{3,2}} & \textcolor{blue}{a_{3,3}} \end{vmatrix} \Rightarrow \begin{vmatrix} a_{1,1} & a_{1,3} \\ a_{2,1} & a_{2,3} \end{vmatrix}
$$

$$
\begin{vmatrix} \textcolor{blue}{a_{1,1}} & a_{1,2} & a_{1,3} \\ \textcolor{blue}{a_{2,1}} & a_{2,2} & a_{2,3} \\ \textcolor{blue}{a_{3,1}} & \textcolor{blue}{a_{3,2}} & \textcolor{blue}{a_{3,3}} \end{vmatrix} \Rightarrow \begin{vmatrix} a_{1,2} & a_{1,3} \\ a_{2,2} & a_{2,3} \end{vmatrix}
$$

Tengo fissa la seconda riga e faccio scorrere la colonna (terza, seconda prima)

$$
\begin{vmatrix} a_{1,1} & a_{1,2} & \textcolor{blue}{a_{1,3}} \\ \textcolor{blue}{a_{2,1}} & a_{2,2} & a_{2,3} \\ a_{3,1} & a_{3,2} & \textcolor{blue}{a_{3,3}} \end{vmatrix} \Rightarrow \begin{vmatrix} a_{1,1} & a_{1,2} \\ a_{3,1} & a_{3,2} \end{vmatrix}
$$

$$
\begin{vmatrix} a_{1,1} & \textcolor{blue}{a_{1,2}} & a_{1,3} \\ \textcolor{blue}{a_{2,1}} & a_{2,2} & a_{2,3} \\ a_{3,1} & \textcolor{blue}{a_{3,2}} & a_{3,3} \end{vmatrix} \Rightarrow \begin{vmatrix} a_{1,1} & a_{1,3} \\ a_{3,1} & a_{3,3} \end{vmatrix}
$$

$$
\begin{vmatrix} \textcolor{blue}{a_{1,1}} & a_{1,2} & a_{1,3} \\ \textcolor{blue}{a_{2,1}} & a_{2,2} & a_{2,3} \\ \textcolor{blue}{a_{3,1}} & a_{3,2} & a_{3,3} \end{vmatrix} \Rightarrow \begin{vmatrix} a_{1,2} & a_{1,3} \\ a_{3,2} & a_{3,3} \end{vmatrix}
$$

Tengo fissa la prima riga e faccio scorrere la colonna (terza, seconda prima)

$$
\begin{vmatrix} \textcolor{blue}{a_{1,1}} & \textcolor{blue}{a_{1,2}} & \textcolor{blue}{a_{1,3}} \\ a_{2,1} & a_{2,2} & \textcolor{blue}{a_{2,3}} \\ a_{3,1} & a_{3,2} & \textcolor{blue}{a_{3,3}} \end{vmatrix} \Rightarrow \begin{vmatrix} a_{2,1} & a_{2,2} \\ a_{3,1} & a_{3,2} \end{vmatrix}
$$

$$
\begin{vmatrix} \textcolor{blue}{a_{1,1}} & \textcolor{blue}{a_{1,2}} & \textcolor{blue}{a_{1,3}} \\ a_{2,1} & \textcolor{blue}{a_{2,2}} & a_{2,3} \\ a_{3,1} & \textcolor{blue}{a_{3,2}} & a_{3,3} \end{vmatrix} \Rightarrow \begin{vmatrix} a_{2,1} & a_{2,3} \\ a_{3,1} & a_{3,3} \end{vmatrix}
$$

$$
\begin{vmatrix} \textcolor{blue}{a_{1,1}} & \textcolor{blue}{a_{1,2}} & \textcolor{blue}{a_{1,3}} \\ \textcolor{blue}{a_{2,1}} & a_{2,2} & a_{2,3} \\ \textcolor{blue}{a_{3,1}} & a_{3,2} & a_{3,3} \end{vmatrix} \Rightarrow \begin{vmatrix} a_{2,2} & a_{2,3} \\ a_{3,2} & a_{3,3} \end{vmatrix}
$$