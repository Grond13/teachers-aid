<template>
    <table>
        <tbody class="desksTableBody">
            <tr v-for="(row, rowIndex) in Desks" :key="rowIndex">
                <Desk v-for="(desk, deskIndex) in row" :key="desk.deskId" :cards="Desks[rowIndex][deskIndex]" :cardHeight="this.cardHeight" :cardWidth="this.cardWidth" />
            </tr>
        </tbody>
    </table>
</template>
  
<script>
import * as classroomLogic from '../logic/classroomLogic.js';
import Desk from "@/components/Desk.vue";

export default {
    name: "ClassroomView",
    data() {
        return {
            Desks: [],
            cardHeight: "75",
            cardWidth: "115",
        };
    },
    props: {
        DatabaseLoadDisabled: {
            type: Boolean,
            default: false,
        },
        ClassroomSpecifications: {
            type: Object
        }
    },
    components: { Desk },
    methods: {
        async getDesks() {
            if (!this.DatabaseLoadDisabled)
                this.Desks = await classroomLogic.getDesks();
            else
                this.Desks = classroomLogic.GetEmptyDesks(this.ClassroomSpecifications);
            //console.log(this.Desks);

            this.cardHeight = this.calculateHeight(this.ClassroomSpecifications.rows, this.ClassroomSpecifications.columns);
            this.cardWidth = this.calculateWidth(this.ClassroomSpecifications.columns);
        },
        calculateHeight(rowCount, columnCount) {
            return classroomLogic.CalculateHeight(rowCount, columnCount);
        },
        calculateWidth(columnCount) {
            return classroomLogic.CalculateWidth(columnCount);
        },
    },
    mounted() {
        this.getDesks();
    },
};
</script>
  
<style scoped>
tbody {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

tr{
    display: flex;
    justify-content: space-around;
    padding: 0 10px;
    width: 100vw;
    margin-top: 5px;
}
</style>