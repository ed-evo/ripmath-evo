<template>
  <v-dialog>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
      variant="text"
      small
      v-bind="activatorProps">Potenza</v-btn>
    </template>
    <v-card>
      <v-card-title>RISPOSTA</v-card-title>
      <v-card-text>E' un contadino della Basilicata!</v-card-text>
    </v-card>
  </v-dialog>
</template>
