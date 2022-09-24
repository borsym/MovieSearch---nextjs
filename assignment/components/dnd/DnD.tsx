import { Grid } from '@mui/material';
import { GetServerSideProps } from 'next';
import { DragDropContext, resetServerContext } from 'react-beautiful-dnd';
import Column from './Column';

const DnD = (props: any) => {
  return (
    <DragDropContext onDragEnd={props.onDragEnd}>
      <Grid
        item
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container spacing={3}>
          <Grid item container xs={6} alignContent="baseline">
            <Grid item xs={12}>
              <Column
                data={props.titles}
                droppableId="movies"
                lastTitleElementRef={props.lastTitleElementRef}
                title="Movies"
              />
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <Column
                data={props.favourites}
                droppableId="favourite"
                title="Favourites"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DragDropContext>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  resetServerContext(); // <-- CALL RESET SERVER CONTEXT, SERVER SIDE

  return {
    props: {
      titles: [],
      onDragEnd: () => {},
      lastTitleElementRef: null,
      favourites: [],
    },
  };
};

export default DnD;
